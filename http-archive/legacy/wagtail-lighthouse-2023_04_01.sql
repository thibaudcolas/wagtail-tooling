#standardSQL
# Lighthouse reports for Wagtail
SELECT
  url,
  report
FROM
  `httparchive.lighthouse.2023_04_01_desktop`
JOIN
  `httparchive.technologies.2023_04_01_desktop`
USING
  (url)
WHERE
  app = 'Wagtail'
