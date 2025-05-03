#standardSQL
# Lighthouse scores for Wagtail sites’ homepages, 2024-04-01 data, 2023-03-01 URLs
SELECT
  three.url,
  JSON_EXTRACT_SCALAR(four.report, '$.categories.accessibility.score') AS accessibility_2024,
  JSON_EXTRACT_SCALAR(four.report, '$.categories.performance.score') AS performance_2024,
  JSON_EXTRACT_SCALAR(four.report, '$.categories.seo.score') AS SEO_2024,
  JSON_EXTRACT_SCALAR(four.report, '$.categories.best-practices.score')  AS best_practices_2024,
  JSON_EXTRACT_SCALAR(three.report, '$.categories.accessibility.score') AS accessibility_2023,
  JSON_EXTRACT_SCALAR(three.report, '$.categories.performance.score') AS performance_2023,
  JSON_EXTRACT_SCALAR(three.report, '$.categories.seo.score') AS SEO_2023,
  JSON_EXTRACT_SCALAR(three.report, '$.categories.best-practices.score')  AS best_practices_2023,
FROM
  `wagtail_httparchive.wagtail-lighthouse-2023_04_01` as three,
  `wagtail-analysis.wagtail_httparchive.django-wagtail-lighthouse-2024_04_01_desktop` as four
WHERE
  three.url = four.url
