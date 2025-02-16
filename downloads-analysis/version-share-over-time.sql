SELECT
  DATE(downloads.timestamp) AS day,
  downloads.file.version AS version,
  COUNT(*) AS downloads_count
FROM
  `bigquery-public-data.pypi.file_downloads` AS downloads
WHERE
  downloads.details.installer.name = 'pip'
  AND (
    SUBSTRING(downloads.file.version,0,1) = '2'
    OR SUBSTRING(downloads.file.version,0,1) = '3'
    OR SUBSTRING(downloads.file.version,0,1) = '4'
    OR SUBSTRING(downloads.file.version,0,1) = '5'
    OR SUBSTRING(downloads.file.version,0,1) = '6'
  )
  AND (DATE(downloads.timestamp) BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 5 day)
    AND CURRENT_DATE())
  AND ( downloads.project = 'wagtail')
GROUP BY
  day,
  version
ORDER BY
  day,
  version desc
