#standardSQL
# Lighthouse scores for Wagtail sites’ homepages, 2025-04-01 data
SELECT
  page,
  rank,
  JSON_EXTRACT_SCALAR(lighthouse, '$.categories.accessibility.score') AS accessibility,
  JSON_EXTRACT_SCALAR(lighthouse, '$.categories.performance.score') AS performance,
  JSON_EXTRACT_SCALAR(lighthouse, '$.categories.seo.score') AS seo,
  JSON_EXTRACT_SCALAR(lighthouse, '$.categories.best-practices.score')  AS best_practices,
FROM
  `wagtail-analysis.wagtail_httparchive.2025_04_01_django_wagtail_reports`
WHERE
  lighthouse IS NOT NULL
  AND EXISTS (SELECT 1 FROM UNNEST(technologies) AS tech WHERE tech.technology = 'Wagtail')
ORDER BY rank ASC
