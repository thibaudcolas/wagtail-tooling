#standardSQL
CREATE TEMP FUNCTION toMarkdown(
    name STRING,
    version STRING,
    home_page STRING,
    project_urls ARRAY<STRING>)
RETURNS STRING
LANGUAGE js AS """
    // Convert project_urls to map for easy access
    const urls = {};
    project_urls.forEach((entry) => {
      const [key, value] = entry.split(', ');
      urls[key.toLowerCase()] = value;
    });
    const url = urls.changelog || urls.home || urls.homepage || urls.source || urls.repository || home_page || `https://pypi.org/project/${name}/`;
    return `- [${name} v${version}](${url})`;
""";

WITH
  -- Factor out the pattern logic once.
  allowed_packages AS (
    SELECT DISTINCT name
    FROM `bigquery-public-data.pypi.distribution_metadata`
    WHERE packagetype = 'bdist_wheel'
      AND (
        name IN ('wagtail', 'coderedcms', 'longclaw', 'django-cast', 'wagalytics', 'puput', 'ls.joyous')
        OR name LIKE 'wagtail%'
        OR name LIKE '%wagtail'
      )
  ),
  latest AS (
    SELECT
      dm.name,
      dm.version,
      dm.author,
      dm.home_page,
      dm.project_urls,
      dm.upload_time,
      toMarkdown(dm.name, dm.version, dm.home_page, dm.project_urls) AS markdown
    FROM `bigquery-public-data.pypi.distribution_metadata` dm
    JOIN allowed_packages ap
      ON dm.name = ap.name
    WHERE dm.packagetype = 'bdist_wheel'
      AND dm.upload_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 14 DAY)
    QUALIFY ROW_NUMBER() OVER (PARTITION BY dm.name ORDER BY dm.upload_time DESC) = 1
  ),
  downloads AS (
    SELECT
      fd.project,
      COUNT(*) AS downloads_count
    FROM `bigquery-public-data.pypi.file_downloads` fd
    JOIN allowed_packages ap
      ON fd.project = ap.name
    WHERE fd.details.installer.name = 'pip'
      AND DATE(fd.timestamp) BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) AND CURRENT_DATE()
    GROUP BY fd.project
  )

SELECT
  l.name,
  d.downloads_count,
  l.version AS latest_release,
  l.author,
  l.home_page,
  l.project_urls,
  l.upload_time,
  l.markdown
FROM latest l
JOIN downloads d
  ON l.name = d.project
ORDER BY l.upload_time DESC;
