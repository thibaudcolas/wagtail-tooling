
#standardSQL
# Lighthouse scores for Wagtail sites’ homepages, 2023-04-01 data,
SELECT
  url,
  JSON_EXTRACT_SCALAR(report, '$.categories.accessibility.score') AS accessibility,
  JSON_EXTRACT_SCALAR(report, '$.categories.performance.score') AS performance,
  JSON_EXTRACT_SCALAR(report, '$.categories.seo.score') AS seo,
  JSON_EXTRACT_SCALAR(report, '$.categories.best-practices.score') AS best_practices,
FROM
  `wagtail_httparchive.drupal-lighthouse-2023_04_01_desktop`
