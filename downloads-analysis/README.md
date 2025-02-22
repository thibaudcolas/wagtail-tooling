# Downloads analysis

Tools related to analyzing Wagtail downloads. Dataset: [PyPI on BigQuery](https://cloud.google.com/blog/topics/developers-practitioners/analyzing-python-package-downloads-bigquery)

## Release candidate downloads

Produce [Wagtail release statistics](https://docs.google.com/spreadsheets/d/1eZ3OvpoHza1lSRzznZLh2qdbDE-RuhTmImndqg0Ugwk/edit) to understand usage patterns over time.

```bash
# Update to use the desired version number, then dry run.
cat release-candidate-downloads.sql | bq query --use_legacy_sql=false --dry_run 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
cat release-candidate-downloads.sql | bq query --use_legacy_sql=false --format=csv > release-candidate-downloads.csv
# Update to use the desired version number, then dry run.
cat release-candidate-total.sql | bq query --use_legacy_sql=false --dry_run 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
cat release-candidate-total.sql | bq query --use_legacy_sql=false --format=csv > release-candidate-total.csv
```

## New packages this week

Warning: expensive!

```bash
cat new-packages-this-week.sql | bq query --max_rows 500 --use_legacy_sql=false --dry_run 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
```
