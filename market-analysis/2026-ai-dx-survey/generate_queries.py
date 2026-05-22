#!/usr/bin/env -S uv run --script
# /// script
# dependencies = ["duckdb"]
# ///

import duckdb
from pathlib import Path

DB_FILE = Path("survey.duckdb")
QUERIES_FILE = Path("queries.sql")


def get_columns(conn):
    return [
        r[1] for r in conn.execute("PRAGMA table_info('survey_responses')").fetchall()
    ]


def escape_identifier(name):
    return name.replace('"', '""')


def generate_single_select_sql(col):
    safe = escape_identifier(col)
    return f"""-- {col} (Single select)
SELECT
    CASE WHEN "{safe}" IS NULL OR "{safe}" = '' THEN 'No answer' ELSE "{safe}" END AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_responses), 1) AS percentage
FROM survey_responses
GROUP BY 1
ORDER BY count DESC;"""


def generate_multi_select_sql(col):
    safe = escape_identifier(col)
    return f"""-- {col} (Multi select)
WITH raw AS (
    SELECT UNNEST(string_split("{safe}", ',')) AS answer
    FROM survey_responses
    WHERE "{safe}" IS NOT NULL AND "{safe}" != ''
),
total AS (
    SELECT COUNT(*) AS total FROM survey_responses WHERE "{safe}" IS NOT NULL AND "{safe}" != ''
)
SELECT
    TRIM(answer) AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / MAX(total.total), 1) AS percentage
FROM raw, total
GROUP BY 1
ORDER BY count DESC;"""


def generate_matrix_sql(prefix, subcols):
    unions = []
    for col in subcols:
        subtask = col[len(prefix) :].strip()
        safe_col = escape_identifier(col)
        escaped_subtask = subtask.replace("'", "''")
        unions.append(
            f"    SELECT '{escaped_subtask}' AS subtask, \"{safe_col}\" AS answer FROM survey_responses"
        )
    union_sql = "\n    UNION ALL\n".join(unions)
    return f"""-- {prefix} (Matrix)
SELECT
    subtask,
    answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(PARTITION BY subtask), 1) AS percentage
FROM (
{union_sql}
) AS unpivoted
WHERE answer IS NOT NULL AND answer != ''
GROUP BY subtask, answer
ORDER BY subtask, count DESC;"""


def generate_free_text_sql(col):
    safe = escape_identifier(col)
    return f"""-- {col} (Free text)
SELECT
    rowid AS response_id,
    "{safe}" AS answer
FROM survey_responses
WHERE "{safe}" IS NOT NULL AND "{safe}" != ''
ORDER BY rowid;"""


def main():
    conn = duckdb.connect(str(DB_FILE))
    cols = get_columns(conn)
    conn.close()

    matrix_prefixes = [
        "How systematically do you use AI tools for the following tasks?",
        "For which Wagtail-related tasks do you regularly use AI assistance?",
        "Please rate the importance of the following considerations for your team around AI adoption",
        "Please rate which possible improvements you think would be most helpful for AI-assisted development",
        "Please rate which content management features you think would be most helpful for CMS users working with AI",
    ]

    single_select = [
        "How often do you use AI tools when working on Wagtail projects?",
        "How would you describe your level of experience with AI-assisted development?",
        "How well does current AI tooling work on Wagtail projects?",
    ]

    multi_select = [
        "What kinds of AI tools do you use on projects?",
        "Do you use some of our existing efforts with AI in Wagtail?",
        "How we can use your information",
    ]

    free_text = [
        "Any other aspects of AI usage you would like to mention?",
        "Are there any other aspects of how we approach AI you would like to mention?",
        "Your contact details",
    ]

    matrix_groups = {p: [] for p in matrix_prefixes}
    for col in cols:
        for prefix in matrix_prefixes:
            if col.startswith(prefix):
                matrix_groups[prefix].append(col)
                break

    sections = []
    for col in single_select:
        if col in cols:
            sections.append(generate_single_select_sql(col))
        else:
            print(f"Warning: expected single-select column not found: {col}")

    for col in multi_select:
        if col in cols:
            sections.append(generate_multi_select_sql(col))
        else:
            print(f"Warning: expected multi-select column not found: {col}")

    for prefix in matrix_prefixes:
        subcols = matrix_groups[prefix]
        if subcols:
            sections.append(generate_matrix_sql(prefix, subcols))

    for col in free_text:
        if col in cols:
            sections.append(generate_free_text_sql(col))
        else:
            print(f"Warning: expected free-text column not found: {col}")

    QUERIES_FILE.write_text("\n\n".join(sections), encoding="utf-8")
    print(f"Generated {len(sections)} queries in {QUERIES_FILE}")


if __name__ == "__main__":
    main()
