# Downloads analysis

Tools related to analysing Wagtail downloads

## Release candidate downloads

Produce [Wagtail release statistics](https://docs.google.com/spreadsheets/d/1eZ3OvpoHza1lSRzznZLh2qdbDE-RuhTmImndqg0Ugwk/edit) to understand usage patterns over time.

```bash
# Update to use the desired version number, then dry run.
cat release-candidate-downloads.sql | bq query --use_legacy_sql=false --dry_run 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
cat release-candidate-downloads.sql | bq query --use_legacy_sql=false --format=csv > release-candidate-downloads.csv
```
