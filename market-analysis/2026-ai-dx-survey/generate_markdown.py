#!/usr/bin/env -S uv run --script
# /// script
# dependencies = ["duckdb"]
# ///
"""
Generate a Markdown report from all query result CSVs in output/.
Each CSV becomes a Markdown table under a level-2 heading derived from its filename.
"""

import csv
from pathlib import Path
from urllib.parse import quote

OUTPUT_DIR = Path("output")
MARKDOWN_FILE = Path("results.md")


def csv_to_markdown_table(csv_path: Path) -> str:
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.reader(f)
        rows = list(reader)

    if not rows:
        return ""

    headers = rows[0]
    data = rows[1:]

    # Build Markdown table
    lines = []
    lines.append("| " + " | ".join(headers) + " |")
    lines.append("|" + "|".join([" --- " for _ in headers]) + "|")
    for row in data:
        # Escape pipe characters in cell content
        escaped = [cell.replace("|", "\\|") for cell in row]
        lines.append("| " + " | ".join(escaped) + " |")

    return "\n".join(lines)


def title_from_filename(path: Path) -> str:
    """Convert a filename like 'How often... Single select.csv' to a heading."""
    name = path.stem  # strip .csv
    # Replace underscores back to spaces (run_queries.py munges them)
    name = name.replace("_", " ")
    return name.strip()


def sort_key(path: Path):
    """
    Return a tuple that sorts CSVs in a sensible order:
    1. Single-select demographic questions first
    2. Multi-select questions next
    3. Matrix questions (raw distributions)
    4. Scored matrix summaries
    5. Free-text questions last
    """
    name = path.stem.lower()
    # Detect type
    is_free_text = "free text" in name
    is_multi = "multi select" in name
    is_single = "single select" in name
    is_scored = name.startswith("score ")
    is_matrix = "matrix" in name and not is_scored

    # Category ordering
    if is_single:
        category = 0
    elif is_multi:
        category = 1
    elif is_matrix:
        category = 2
    elif is_scored:
        category = 3
    elif is_free_text:
        category = 4
    else:
        category = 5

    return (category, name)


def main():
    # Gather all CSV files, skipping hidden/system files
    csv_paths = sorted(
        [p for p in OUTPUT_DIR.glob("*.csv") if not p.name.startswith(".")],
        key=sort_key,
    )

    md_lines = ["# 2026 Wagtail DX with AI Survey – Results\n"]
    md_lines.append("This page contains all survey question results in tabular form.\n")
    md_lines.append(
        "Each heading links to the underlying CSV file in the "
        "[`output/`](./) directory.\n"
    )

    for csv_path in csv_paths:
        title = title_from_filename(csv_path)
        rel_path = quote(str(csv_path))
        md_lines.append(f"\n## [{title}]({rel_path})\n")
        md_lines.append(csv_to_markdown_table(csv_path))
        md_lines.append("")

    MARKDOWN_FILE.write_text("\n".join(md_lines), encoding="utf-8")
    print(f"Wrote {len(csv_paths)} tables to {MARKDOWN_FILE}")


if __name__ == "__main__":
    main()
