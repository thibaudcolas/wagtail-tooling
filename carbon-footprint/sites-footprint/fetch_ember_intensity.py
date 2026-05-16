#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "duckdb",
#     "httpx",
# ]
# ///
"""Fetch and extract latest CO2 intensity data from Ember Energy."""

from datetime import datetime
from pathlib import Path

import duckdb
import httpx

EMBER_CSV_URL = "https://files.ember-energy.org/public-downloads/yearly_full_release_long_format.csv"
LOCAL_CSV = Path("yearly_full_release_long_format.csv")


def download_ember_data() -> None:
    """Download the Ember Energy CSV file."""
    print(f"Downloading {EMBER_CSV_URL}...")
    with httpx.stream("GET", EMBER_CSV_URL, follow_redirects=True) as response:
        response.raise_for_status()
        with LOCAL_CSV.open("wb") as f:
            for chunk in response.iter_bytes():
                f.write(chunk)
    print(f"Downloaded to {LOCAL_CSV}")


def extract_co2_intensity() -> None:
    """Extract latest CO2 intensity data for each area."""
    output_file = f"{datetime.now().strftime('%Y%m%d')}-ember-intensity.csv"

    print("Loading data into DuckDB...")
    with duckdb.connect(":memory:") as con:
        con.execute(f"CREATE TABLE ember AS SELECT * FROM '{LOCAL_CSV}'")

        print("Extracting latest CO2 intensity data...")
        query = f"""
        COPY (
            SELECT *
            FROM (
                SELECT
                    e.*,
                    ROW_NUMBER() OVER (
                        PARTITION BY Area
                        ORDER BY Year DESC
                    ) AS rn
                FROM ember e
                WHERE Variable = 'CO2 intensity'
            ) t
            WHERE rn = 1
            ORDER BY Area ASC
        ) TO '{output_file}'
        """
        con.execute(query)

    print(f"Exported to {output_file}")


def main() -> None:
    """Download Ember data, extract CO2 intensity, and clean up."""
    try:
        download_ember_data()
        extract_co2_intensity()
    finally:
        if LOCAL_CSV.exists():
            LOCAL_CSV.unlink()
    print("Done!")


if __name__ == "__main__":
    main()
