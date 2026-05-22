#!/usr/bin/env -S uv run --script
# /// script
# dependencies = ["duckdb"]
# ///

import duckdb
import csv
import re
from pathlib import Path

DB_FILE = Path("survey.duckdb")
QUERIES_FILE = Path("queries.sql")
OUTPUT_DIR = Path("output")


def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    conn = duckdb.connect(str(DB_FILE))
    sql_text = QUERIES_FILE.read_text(encoding="utf-8")

    # Split on semicolons that end a statement (followed by optional whitespace/newlines or EOF)
    statements = [
        s.strip() for s in re.split(r";(?:\s*$|\s*\n)", sql_text) if s.strip()
    ]

    for stmt in statements:
        lines = stmt.splitlines()
        title = "unknown"
        if lines and lines[0].strip().startswith("--"):
            title = lines[0].strip().lstrip("-").strip()
            # Clean for filename
            title = re.sub(r"[^\w\s-]", "", title).strip()

        print(f"Executing: {title} ...")
        result = conn.execute(stmt).fetchall()
        columns = [desc[0] for desc in conn.description]

        csv_path = OUTPUT_DIR / f"{title}.csv"
        with open(csv_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(columns)
            writer.writerows(result)
        print(f"  -> {csv_path} ({len(result)} rows)")

    conn.close()


if __name__ == "__main__":
    main()
