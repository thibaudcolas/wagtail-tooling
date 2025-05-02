#standardSQL
# Lighthouse reports for Wagtail
SELECT
  url,
  report
FROM
  `httparchive.lighthouse.2022_05_01_desktop`
JOIN
  `httparchive.technologies.2022_05_01_desktop`
USING
  (url)
WHERE
  app = 'Wagtail'
