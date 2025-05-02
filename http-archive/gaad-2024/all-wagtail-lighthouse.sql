#standardSQL
# Lighthouse reports for Wagtail
# Large query to save as a table for further, cheaper querying
SELECT
  url,
  report
FROM
  `httparchive.lighthouse.2024_01_01_desktop`
JOIN
  `httparchive.technologies.2024_01_01_desktop`
USING
  (url)
WHERE
  app = 'Wagtail'
