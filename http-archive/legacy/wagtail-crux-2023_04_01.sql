SELECT url, rank
FROM `httparchive.technologies.2023_04_01_desktop`
JOIN `httparchive.urls.latest_crux_desktop`
USING (url)
WHERE app = 'Wagtail'
ORDER BY rank
