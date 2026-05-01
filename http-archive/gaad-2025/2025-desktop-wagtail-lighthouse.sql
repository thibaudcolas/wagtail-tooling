#standardSQL
-- Query estimated to 20TB of billable data processed, but this is likely to be an overestimate due to https://har.fyi/guides/minimizing-costs/.
-- Effective bytes billed: 5TB
SELECT
  page,
  rank,
  summary,
  custom_metrics.a11y,
  lighthouse,
  technologies
FROM
  `httparchive.crawl.pages`
WHERE
  date = '2025-04-01'
  AND client = 'desktop'
  AND is_root_page = true
  AND EXISTS (
    SELECT 1 FROM UNNEST(technologies) AS tech
    WHERE tech.technology = 'Wagtail' or tech.technology = 'Django'
  )
ORDER BY rank ASC;
