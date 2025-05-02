#standardSQL
# Lighthouse reports for Django
SELECT
  url,
  report,
  app
FROM
  `httparchive.lighthouse.2023_08_01_desktop`
JOIN
  `httparchive.technologies.2023_08_01_desktop`
USING
  (url)
WHERE
  app = 'Django'
  or app = 'Wagtail'
