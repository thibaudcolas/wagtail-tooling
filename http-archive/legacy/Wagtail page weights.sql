SELECT
  DISTINCT(url),
  crux.rank,
  bytesTotal / 1024 AS total_kb
FROM `wagtail-analysis.wagtail_httparchive.wagtail-crux-2023_04_01` as crux
JOIN
  `httparchive.summary_pages.2023_04_01_desktop`
USING
  (url)
ORDER BY
  rank
