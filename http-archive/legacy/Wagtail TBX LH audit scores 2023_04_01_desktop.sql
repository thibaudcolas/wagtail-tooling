#standardSQL
# Lighthouse audit scores for Wagtail projects
# Note scores, weightings, groups and descriptions may be off in mixed months when new versions of Lighthouse roles out

CREATE TEMPORARY FUNCTION getAudits(report STRING, category STRING)
RETURNS ARRAY<STRUCT<id STRING, weight INT64, audit_group STRING, title STRING, description STRING, score INT64>> LANGUAGE js AS '''
var $ = JSON.parse(report);
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
  `wagtail_httparchive.wagtail-lighthouse-2023_04_01`,
  UNNEST(getAudits(report, 'accessibility')) AS audits
WHERE
  LENGTH(report) < 20000000  # necessary to avoid out of memory issues. Excludes very large results
  and (url = 'https://www.tate.org.uk/'
OR url = 'https://www.skillsforcare.org.uk/'
OR url = 'https://www.samaritans.org/'
OR url = 'https://www.rnib.org.uk/'
OR url = 'https://www.rca.ac.uk/'
OR url = 'https://www.path.org/'
OR url = 'https://www.oxfam.org.uk/'
OR url = 'https://www.newamerica.org/'
OR url = 'https://www.nationalarchives.gov.uk/'
OR url = 'https://www.jpl.nasa.gov/'
OR url = 'https://www.hotjar.com/'
OR url = 'https://www.gosh.nhs.uk/'
OR url = 'https://www.gloshospitals.nhs.uk/'
OR url = 'https://www.cuh.nhs.uk/'
OR url = 'https://www.buckinghamshire.gov.uk/'
OR url = 'https://www.achieve3000.com/'
OR url = 'https://home.samaritans.org/'
OR url = 'https://bloodcancer.org.uk/'
OR url = 'https://www.rff.org/'
OR url = 'https://www.oxfamamerica.org/'
OR url = 'https://www.nesta.org.uk/'
OR url = 'https://www.minimumincome.org.uk/'
OR url = 'https://www.indexventures.com/'
OR url = 'https://www.gosh.org/'
OR url = 'https://www.cap-rx.com/'
OR url = 'https://www.bethebusiness.com/'
OR url = 'https://www.beckman-foundation.org/'
OR url = 'https://www.africaportal.org/'
OR url = 'https://www.actionforchildren.org.uk/'
OR url = 'https://webchat.samaritans.org/'
OR url = 'https://wagtail.org/'
OR url = 'https://pitchfinder.org.uk/'
OR url = 'https://participate.mqmentalhealth.org/'
OR url = 'https://interactive.wharton.upenn.edu/'
OR url = 'https://give.thunderbird.net/'
OR url = 'https://donate.mozilla.org/'
OR url = 'https://docs.wagtail.org/'
OR url = 'https://digitalcapability.jisc.ac.uk/'
OR url = 'https://counselling.sueryder.org/'
OR url = 'https://www.nypublicradio.org/'
OR url = 'https://www.cambridgechildrens.org.uk/'
OR url = 'https://blog.maggies.org/'
OR url = 'https://torchbox.com/')
GROUP BY
  audits.id
ORDER BY
  median_weight DESC,
  id
