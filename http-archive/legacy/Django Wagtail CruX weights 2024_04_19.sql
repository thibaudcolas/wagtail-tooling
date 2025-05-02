SELECT
  url,
  rank,
  bytesTotal / 1024 AS total_kb
FROM `wagtail_httparchive.2024_04_19_django_wagtail_all_urls` as urls
JOIN
  `httparchive.summary_pages.2024_04_01_desktop`
USING
  (url)
ORDER BY
  rank
