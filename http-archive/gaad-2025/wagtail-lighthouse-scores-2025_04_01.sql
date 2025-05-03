#standardSQL
# Lighthouse scores for Wagtail sites’ homepages, 2024-04-01 data
SELECT
  url,
  JSON_EXTRACT_SCALAR(report, '$.categories.accessibility.score') AS accessibility,
  JSON_EXTRACT_SCALAR(report, '$.categories.performance.score') AS performance,
  JSON_EXTRACT_SCALAR(report, '$.categories.seo.score') AS seo,
  JSON_EXTRACT_SCALAR(report, '$.categories.best-practices.score')  AS best_practices,
FROM
  `wagtail-analysis.wagtail_httparchive.2024_04_19_wagtail_crux_urls`
JOIN
  `wagtail-analysis.wagtail_httparchive.django-wagtail-lighthouse-2024_04_01_desktop`
USING (url)
