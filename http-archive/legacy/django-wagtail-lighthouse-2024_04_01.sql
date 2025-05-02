#standardSQL
# Lighthouse reports for Django & Wagtail projects
SELECT
  url,
  report
FROM
  `httparchive.lighthouse.2024_04_01_desktop`
JOIN
  `wagtail-analysis.wagtail_httparchive.2024_04_19_django_wagtail_all_urls`
USING
  (url)
