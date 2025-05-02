#standardSQL
SELECT
  *
FROM
  `wagtail-analysis.wagtail_httparchive.2025_04_01_django_wagtail_reports` AS w
JOIN
  `httparchive.crawl.pages` AS p
ON  p.page = w.page
WHERE
  p.date   = DATE '2025-04-01'             -- † partition pruning
  AND p.client = 'desktop'                 -- † part of the clustering key
ORDER BY
  w.rank;
