#standardSQL
# Lighthouse scores for Wagtail sites’ homepages – only ones present in 2024-04 data and not 2023-04.
SELECT
  url,
  JSON_EXTRACT_SCALAR(report, '$.categories.accessibility.score') AS accessibility,
  JSON_EXTRACT_SCALAR(report, '$.categories.performance.score') AS performance,
  JSON_EXTRACT_SCALAR(report, '$.categories.seo.score') AS seo,
  JSON_EXTRACT_SCALAR(report, '$.categories.best-practices.score')  AS best_practices,
FROM
  `wagtail-analysis.wagtail_httparchive.2024_04_19_wagtail_crux_urls` AS four
JOIN
  `wagtail-analysis.wagtail_httparchive.django-wagtail-lighthouse-2024_04_01_desktop`
USING (url)
WHERE NOT EXISTS (
  SELECT 1
  FROM `wagtail_httparchive.wagtail-crux-2023_04_01` as three
  WHERE four.url = three.url
)
