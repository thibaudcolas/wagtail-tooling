#standardSQL
SELECT
  downloads.file.version AS version,
  COUNT(*) AS downloads_count
FROM
  `bigquery-public-data.pypi.file_downloads` AS downloads
WHERE
  downloads.project = 'wagtail'
  AND (SUBSTRING(downloads.file.version,0,1) = '2'
    OR SUBSTRING(downloads.file.version,0,1) = '3'
    OR SUBSTRING(downloads.file.version,0,1) = '4')
  AND (DATE(downloads.timestamp) BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 30 day)
    AND CURRENT_DATE())
GROUP BY
  version
ORDER BY
  version desc
