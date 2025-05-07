# GAAD 2025

```sql
SELECT * FROM `httparchive.crawl.pages` TABLESAMPLE SYSTEM (0.0001 PERCENT) WHERE date = "2025-04-01"
```

## References

- 2024 spreadsheet: [Wagtail sites accessibility GAAD 2024](https://docs.google.com/spreadsheets/d/1hQXCSbvAtmdf7IArBT4RL3cvgldCUx1UPGzABC_g8Dc/edit)
- 2023 spreadsheet: [Wagtail sites accessibility GAAD 2023](https://docs.google.com/spreadsheets/d/1dLpW6fbcl-AsVQNVhihzi1p-fY5gByZK_EQWt-EtCoM/edit)

### Data sources

All data is fetched from the HTTP Archive via [Google BigQuery](https://cloud.google.com/bigquery/). For more information, see their [Getting started accessing the HTTP Archive with BigQuery](https://har.fyi/guides/getting-started/).

- [Chrome UX report](https://developer.chrome.com/docs/crux/) websites dataset
- [HTTP Archive Web Almanac](https://almanac.httparchive.org/) analysis techniques and queries
- Wappalyzer technology detection ([2023 HTTP Archive fork](https://github.com/HTTPArchive/wappalyzer))
