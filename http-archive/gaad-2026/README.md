# GAAD 2026

## Initial data fetching

### Initial checks

First check we have access to the correct project where we want to store the data in BigQuery:

```bash
# Set the correct project.
gcloud config set project wagtail-analysis
bq ls
bq ls wagtail_httparchive
bq show --format=prettyjson wagtail-analysis:wagtail_httparchive.2025_04_01_django_wagtail_reports
```

Then check the target data does exist:

```bash
bq query --dry_run 'SELECT * FROM `httparchive.crawl.pages` TABLESAMPLE SYSTEM (0.0001 PERCENT) WHERE date = "2026-04-01"' 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
```

### Query run

If all is well, we can run the real query (EXPENSIVE!). Note: there will be a lot of terminal output. Be prepared.

```bash
# One last dry run. Should report about 17TB.
# Then for real.
# maximum_bytes_billed set to 25TB.
cat desktop-wagtail-lighthouse.sql \
  | bq --project_id=wagtail-analysis query --dry_run 2>&1 \
  | grep -o '[0-9]\+' \
  | awk '{printf "%.2f TB\n", $1/1024/1024/1024/1024}'
cat desktop-wagtail-lighthouse.sql \
  | bq --project_id=wagtail-analysis query \
      --destination_table=wagtail-analysis:wagtail_httparchive.2026_04_01_django_wagtail_reports \
      --replace \
      --maximum_bytes_billed=25000000000000 \
      --batch
```

Verification:

```bash
bq --project_id=wagtail-analysis show --format=prettyjson wagtail-analysis:wagtail_httparchive.2026_04_01_django_wagtail_reports
```

### Initial data export

We need a bucket, we need to convert JSON to strings for Parquet exports.

```bash
bq --project_id=wagtail-analysis query --use_legacy_sql=false --batch '
CREATE OR REPLACE TABLE `wagtail-analysis.wagtail_httparchive.2026_04_01_django_wagtail_reports_export` AS
SELECT
  page,
  rank,
  TO_JSON_STRING(summary)    AS summary,
  TO_JSON_STRING(a11y)       AS a11y,
  TO_JSON_STRING(lighthouse) AS lighthouse,
  technologies
FROM `wagtail-analysis.wagtail_httparchive.2026_04_01_django_wagtail_reports`
'
gcloud storage buckets create gs://wagtail-analysis-exports \
  --project=wagtail-analysis \
  --location=US \
  --uniform-bucket-level-access
bq --project_id=wagtail-analysis extract \
  --destination_format=PARQUET \
  --compression=ZSTD \
  wagtail-analysis:wagtail_httparchive.2026_04_01_django_wagtail_reports_export \
  'gs://wagtail-analysis-exports/2026_04_01_django_wagtail_reports-*.parquet'
gcloud storage cp 'gs://wagtail-analysis-exports/2026_04_01_django_wagtail_reports-*.parquet' .
```

## References

- 2025 spreadsheet: [Wagtail sites accessibility GAAD 2025](https://docs.google.com/spreadsheets/d/18tCgJWHodj5a8Pfe_m63E5PvxUwIXQuY30rUbizGtIU/edit)
- 2024 spreadsheet: [Wagtail sites accessibility GAAD 2024](https://docs.google.com/spreadsheets/d/1hQXCSbvAtmdf7IArBT4RL3cvgldCUx1UPGzABC_g8Dc/edit)
- 2023 spreadsheet: [Wagtail sites accessibility GAAD 2023](https://docs.google.com/spreadsheets/d/1dLpW6fbcl-AsVQNVhihzi1p-fY5gByZK_EQWt-EtCoM/edit)

### Data sources

All data is fetched from the HTTP Archive via [Google BigQuery](https://cloud.google.com/bigquery/). For more information, see their [Getting started accessing the HTTP Archive with BigQuery](https://har.fyi/guides/getting-started/).

- [Chrome UX report](https://developer.chrome.com/docs/crux/) websites dataset
- [HTTP Archive Web Almanac](https://almanac.httparchive.org/) analysis techniques and queries
- Wappalyzer technology detection ([2023 HTTP Archive fork](https://github.com/HTTPArchive/wappalyzer))
