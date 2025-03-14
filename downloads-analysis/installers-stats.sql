#standardSQL
-- BigQuery – downloads of the Wagtail project by installer
-- Sample & docs: https://github.com/thibaudcolas/wagtail-tooling/tree/main/downloads-analysis
WITH filtered_downloads AS (
  SELECT
    timestamp,
    details.installer.name AS installer
  FROM `bigquery-public-data.pypi.file_downloads`
  -- Change this to analyze another project. BEWARE OF THE COSTS
  -- Without this line – query cost = 7.5 TB (USD40)
  WHERE project = 'wagtail'
  AND timestamp BETWEEN TIMESTAMP('2024-01-01T00:00:01.000Z') AND CURRENT_TIMESTAMP()
)
SELECT
  TIMESTAMP_TRUNC(timestamp, MONTH) AS month,
  installer,
  COUNT(*) AS num_downloads
FROM filtered_downloads
GROUP BY month, installer
ORDER BY month, num_downloads DESC;
