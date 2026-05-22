#!/usr/bin/env -S uv run --script
# /// script
# dependencies = [
#   "duckdb",
# ]
# ///

import duckdb
import csv
from pathlib import Path

# Configuration
DATA_DIR = Path(__file__).parent
CSV_FILE = DATA_DIR / "survey-responses.csv"
DB_FILE = DATA_DIR / "survey.duckdb"


# Read all rows from CSV via Python's robust csv parser
def read_csv_data(csv_path):
    with open(csv_path, "r", encoding="utf-8", newline="") as f:
        reader = csv.reader(f)
        headers = next(reader)
        rows = []
        for row in reader:
            # Ensure row length matches headers (pad with None if needed)
            if len(row) < len(headers):
                row.extend([None] * (len(headers) - len(row)))
            rows.append(row[: len(headers)])
    return headers, rows


# Clean column names for SQL identifiers
def clean_column_name(name):
    name = name.strip()
    # Remove brackets
    name = name.replace("[", "").replace("]", "")
    return name


if __name__ == "__main__":
    # Remove old DB to start fresh
    if DB_FILE.exists():
        DB_FILE.unlink()

    headers, rows = read_csv_data(CSV_FILE)
    clean_headers = [clean_column_name(h) for h in headers]

    # Detect duplicate clean names
    if len(set(clean_headers)) != len(clean_headers):
        raise ValueError("Duplicate column names after cleaning.")

    conn = duckdb.connect(str(DB_FILE))

    # Build CREATE TABLE statement
    # Use TEXT for everything for simplicity
    cols_sql = ", ".join([f'"{h}" TEXT' for h in clean_headers])
    create_sql = f"CREATE TABLE survey_responses ({cols_sql})"
    conn.execute(create_sql)

    # Insert data
    placeholders = ", ".join(["?"] * len(clean_headers))
    insert_sql = f"INSERT INTO survey_responses VALUES ({placeholders})"
    conn.executemany(insert_sql, rows)

    row_count = conn.execute("SELECT COUNT(*) FROM survey_responses").fetchone()[0]
    print(f"Loaded {row_count} rows into 'survey_responses' in {DB_FILE}")

    # Verify: print first and last timestamp
    print("First 3 timestamps:")
    for r in conn.execute(
        'SELECT "Timestamp" FROM survey_responses LIMIT 3'
    ).fetchall():
        print("  ", r[0])
    print("Last 3 timestamps:")
    for r in conn.execute(
        'SELECT "Timestamp" FROM survey_responses ORDER BY rowid DESC LIMIT 3'
    ).fetchall():
        print("  ", r[0])

    # Print column count
    result = conn.execute("PRAGMA table_info('survey_responses')").fetchall()
    print(f"Total columns: {len(result)}")

    conn.close()
