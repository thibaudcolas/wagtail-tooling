#standardSQL
-- From https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2024/accessibility/lighthouse_a11y_audits.sql
# Get summary of all Lighthouse scores for a category
CREATE TEMPORARY FUNCTION getAudits(report JSON, category STRING)
RETURNS ARRAY<STRUCT<id STRING, weight INT64, audit_group STRING, title STRING, description STRING, score INT64>> LANGUAGE js AS '''
try {
  var $ = report;
  var auditrefs = $.categories[category].auditRefs;
  var audits = $.audits;
  $ = null;
  var results = [];
  for (auditref of auditrefs) {
    results.push({
      id: auditref.id,
      weight: auditref.weight,
      audit_group: auditref.group,
      description: audits[auditref.id].description,
      score: audits[auditref.id].score
    });
  }
  return results;
} catch (e) {
  return [{}];
}
''';
SELECT
  audits.id AS id,
  COUNTIF(audits.score > 0) AS num_pages,
  COUNT(0) AS total,
  COUNTIF(audits.score IS NOT NULL) AS total_applicable,
  SAFE_DIVIDE(COUNTIF(audits.score > 0), COUNTIF(audits.score IS NOT NULL)) AS pct,
  APPROX_QUANTILES(audits.weight, 100)[OFFSET(50)] AS median_weight,
  MAX(audits.audit_group) AS audit_group,
  MAX(audits.description) AS description
FROM
  `wagtail-analysis.wagtail_httparchive.2025_04_01_django_wagtail_reports`,
  UNNEST(getAudits(lighthouse, 'accessibility')) AS audits
WHERE
  lighthouse IS NOT NULL
  AND EXISTS (
    SELECT 1 FROM UNNEST(technologies) AS tech
    WHERE tech.technology = 'Wagtail'
  )
GROUP BY
  audits.id
ORDER BY
  median_weight DESC,
  audits.id;
