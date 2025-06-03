-- Inspired by HTTP Archive Web Almanac 2024 page weight reports.
-- See https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2024/page-weight/bytes_per_type.sql
SELECT
  page,
  rank,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesTotal') AS INT64) / 1024, 2) AS total_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesHtml') AS INT64) / 1024, 2) AS html_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesJS') AS INT64) / 1024, 2) AS js_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesCss') AS INT64) / 1024, 2) AS css_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesImg') AS INT64) / 1024, 2) AS img_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesGif') AS INT64) / 1024, 2) AS gif_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesPng') AS INT64) / 1024, 2) AS png_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesJpg') AS INT64) / 1024, 2) AS jpg_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesWebp') AS INT64) / 1024, 2) AS webp_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesSvg') AS INT64) / 1024, 2) AS svg_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesVideo') AS INT64) / 1024, 2) AS video_kbytes,
  ROUND(CAST(JSON_VALUE(summary, '$.bytesFont') AS INT64) / 1024, 2) AS font_kbytes
FROM
  `wagtail_httparchive.2025_04_01_django_wagtail_reports`
WHERE
  CAST(JSON_VALUE(summary, '$.bytesTotal') AS INT64) > 0
  AND EXISTS (SELECT 1 FROM UNNEST(technologies) AS tech WHERE tech.technology = 'Wagtail')
ORDER BY
  rank
