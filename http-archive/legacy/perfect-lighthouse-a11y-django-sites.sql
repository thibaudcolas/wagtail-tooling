#standardSQL
# Lighthouse category scores per CMS
SELECT
  app as cms,
  COUNT(DISTINCT url) AS freq
FROM
  `httparchive.lighthouse.2023_08_01_desktop`
JOIN
  `httparchive.technologies.2023_08_01_desktop`
USING
  (url)
WHERE
  category = 'Web frameworks'
AND
  CAST(JSON_EXTRACT_SCALAR(report, '$.categories.accessibility.score') AS NUMERIC) = 1
AND (
  app = 'Django'
)
GROUP BY
  app
ORDER BY
  freq
