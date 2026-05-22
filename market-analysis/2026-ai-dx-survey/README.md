# 2026 Wagtail DX with AI Survey – Analysis

Blog post: [Results of the 2026 Wagtail DX with AI survey](https://wagtail.org/blog/2026-ai-dx-survey/). Data analysis of the results of the [AI and Developer Experience: Wagtail community survey](https://wagtail.org/blog/ai-and-developer-experience-wagtail-community-survey/).

See the [survey plan](./survey-plan.md) which also contains the survey questions.

## Workflow

Run the scripts in order:

```bash
# 1. Load raw CSV into DuckDB
./load_survey.py
# 2. Generate SQL queries for every question
./generate_queries.py
# 3. Execute the queries and write results to output/*.csv
./run_queries.py
# 4. (Optional) Generate a Markdown report from all CSVs
./generate_markdown.py
```

## Query design

Every survey question gets its own SQL block in `queries.sql`. All queries return:

- **Absolute counts** (`count`)
- **Percentages** (`percentage`) so you can copy-paste directly into bar-chart tools.

The type of query depends on the question format:

### 1. Single-select questions

Percentages are computed **out of the total 48 respondents**.

### 2. Multi-select questions

Percentages are computed **out of the number of people who answered that specific question** (so multiple selections can add up to > 100 %).

### 3. Matrix (grid) questions

Example: _"How systematically do you use AI tools for the following tasks?"_ with 15 sub-tasks.

The query unpivots the sub-task columns with `UNION ALL`, then groups by **sub-task** and **answer**:

Each row is a `(subtask, answer)` pair, making it trivial to filter by sub-task and plot a small bar chart for each one.

### 5. Scored matrix summaries

For matrix questions with numeric answers (0-4) we also produce a scored summary per subtask. The query extracts the leading number from each answer (e.g. `"3 (very important)"` → `3`), then sums the scores and ranks subtasks from highest to lowest:

## Output

After `./run_queries.py`, the `output/` directory contains one CSV per query.

For example:

- `How_often_do_you_use_AI_tools_when_working_on_Wagtail_projec.csv`
- `How_systematically_do_you_use_AI_tools_for_the_following_tas.csv`
- `Score_How_systematically_do_you_use_AI_tools_for_the_following_tas.csv`
- …

Each CSV contains the exact columns returned by the SQL query (`answer`, `count`, `percentage`; or `subtask`, `answer`, `count`, `percentage` for matrix questions; or `subtask`, `total_score`, `responses`, `avg_score` for scored summaries).

After `./generate_markdown.py`, a single Markdown file collates every CSV into a human-readable report:

- **`output/results.md`** — all tables in one document, sorted by question type, with each heading linking back to its source CSV.

## Notes

- `survey-responses.csv` is exported from the survey tool and contains some cells with internal newlines (free-text answers). `load_survey.py` handles this by reading the file with Python’s `csv` module (which respects quoted newlines) and inserting rows directly into DuckDB.
- The exported CSV does **not** contain a `Your contact details` column, even though it was present in the survey form. `generate_queries.py` prints a warning for any expected column that is missing.
- Every step is fully automated and deterministic. Start from a clean checkout, run the scripts above in order, and you will recreate the database, all output CSVs, and the Markdown report.
