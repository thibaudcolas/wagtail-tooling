#standardSQL
# Lighthouse scores for Wagtail sites’ homepages, 2023-04-01 data,
SELECT
  url,
  rank,
  JSON_EXTRACT_SCALAR(report, '$.categories.accessibility.score') AS accessibility,
  JSON_EXTRACT_SCALAR(report, '$.categories.performance.score') AS performance,
  JSON_EXTRACT_SCALAR(report, '$.categories.seo.score') AS seo,
  JSON_EXTRACT_SCALAR(report, '$.categories.best-practices.score') AS best_practices,
FROM
  `wagtail_httparchive.wagtail-lighthouse-2023_04_01`
JOIN
  `wagtail_httparchive.wagtail-crux-2023_04_01`
USING
  (url)
ORDER BY
  rank
