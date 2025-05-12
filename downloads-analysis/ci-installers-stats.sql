#standardSQL
-- BigQuery – downloads of the Wagtail project by installer
-- Sample & docs: https://github.com/thibaudcolas/wagtail-tooling/tree/main/downloads-analysis
WITH filtered_downloads AS (
  SELECT
    timestamp,
    details.installer.name AS installer,
    details.ci AS ci
  FROM `bigquery-public-data.pypi.file_downloads`
  -- Change this to analyze another project. BEWARE OF THE COSTS
  -- Without this line – query cost = 7.5 TB (USD40)
  -- With this line - expet a query cost around 5 - 30GB (likely free, USD 0.15 if over allowance)
  WHERE project = 'wagtail'
  AND timestamp BETWEEN TIMESTAMP('2024-01-01T00:00:01.000Z') AND CURRENT_TIMESTAMP()
)
SELECT
  TIMESTAMP_TRUNC(timestamp, MONTH) AS month,
  installer,
  ci,
  COUNT(*) AS num_downloads
FROM filtered_downloads
GROUP BY month, installer, ci
ORDER BY month, num_downloads DESC, ci;
