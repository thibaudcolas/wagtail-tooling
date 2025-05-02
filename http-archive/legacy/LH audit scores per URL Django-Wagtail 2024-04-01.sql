#standardSQL
# Lighthouse audit scores for Wagtail projects
# Note scores, weightings, groups and descriptions may be off in mixed months when new versions of Lighthouse roles out

CREATE TEMPORARY FUNCTION getAudits(report STRING)
RETURNS ARRAY<STRUCT<id STRING, audit_group STRING, score INT64>> LANGUAGE js AS '''
var $ = JSON.parse(report);
var audits = $.audits;
var accessibility = $.categories.accessibility
var performance = $.categories.performance
var seo = $.categories.seo
var best = $.categories['best-practices']
$ = null;
var results = [];
for (auditref of accessibility.auditRefs) {
  results.push({
    id: auditref.id,
    audit_group: auditref.group,
    score: audits[auditref.id].score
  });
}
for (auditref of performance.auditRefs) {
  results.push({
    id: auditref.id,
    audit_group: auditref.group,
    score: audits[auditref.id].score
  });
}
for (auditref of seo.auditRefs) {
  results.push({
    id: auditref.id,
    audit_group: auditref.group,
    score: audits[auditref.id].score
  });
}
for (auditref of best.auditRefs) {
  results.push({
    id: auditref.id,
    audit_group: auditref.group,
    score: audits[auditref.id].score
  });
}
return results;
''';

SELECT
  url,
  audits.id AS id,
  audits.audit_group as audit_group,
  audits.score as score
FROM `wagtail-analysis.wagtail_httparchive.django-wagtail-lighthouse-2024_04_01_desktop`
CROSS JOIN UNNEST(getAudits(report)) AS audits
WHERE
  LENGTH(report) < 20000000  # necessary to avoid out of memory issues. Excludes very large results
