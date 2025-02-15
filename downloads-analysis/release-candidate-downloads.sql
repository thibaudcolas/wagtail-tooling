#standardSQL
-- https://docs.google.com/spreadsheets/d/1eZ3OvpoHza1lSRzznZLh2qdbDE-RuhTmImndqg0Ugwk/edit
WITH downloads AS (
  SELECT *
  FROM `bigquery-public-data.pypi.file_downloads` as dl
  WHERE dl.details.installer.name = 'pip'
    AND dl.project = 'wagtail'
    -- 6.4
    AND REGEXP_CONTAINS(dl.file.version, r'^(6\.4|6\.3($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2025-01-20T18:49:20.000Z') AND TIMESTAMP('2025-02-03T17:09:01.000Z')
    -- 6.3
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(6\.3|6\.2($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2024-10-21T17:18:36.000Z') AND TIMESTAMP('2024-11-01T14:01:24.000Z')
    -- 6.2
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(6\.2|6\.1($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2024-07-19T16:23:26.000Z') AND TIMESTAMP('2024-08-01T13:29:29.000Z')
    -- 6.1
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(6\.1|6\.0($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2024-04-18T16:59:25.000Z') AND TIMESTAMP('2024-05-01T13:10:29.000Z')
    -- 6.0
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(6\.0|5\.2($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2024-01-24T14:56:22.000Z') AND TIMESTAMP('2024-02-07T13:22:20.000Z')
    -- 5.2
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(5\.2|5\.1($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2023-10-19T22:41:09.000Z') AND TIMESTAMP('2023-11-01T12:55:57.000Z')
    -- 5.1
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(5\.1|5\.0($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2023-07-18T15:19:19.000Z') AND TIMESTAMP('2023-08-01T13:54:27.000Z')
    -- 5.0
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(5\.0|4\.2($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2023-04-20T11:24:46.000Z') AND TIMESTAMP('2023-05-02T15:07:54.000Z')
    -- 4.2
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(4\.2|4\.1($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2023-01-20T13:55:50.000Z') AND TIMESTAMP('2023-02-06T13:48:27.000Z')
    -- 4.1
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(4\.1|4\.0($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2022-10-18T12:00:42.000Z') AND TIMESTAMP('2022-11-01T11:51:51.000Z')
    -- 4.0
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(4\.0|3\.0($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2022-08-12T13:32:37.000Z') AND TIMESTAMP('2022-08-31T13:38:20.000Z')
    -- 3.0
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(3\.0|2\.16($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2022-04-14T12:49:27.000Z') AND TIMESTAMP('2022-05-16T14:02:05.000Z')
    -- 2.16
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(2\.16|2\.15($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2022-01-21T14:40:53.000Z') AND TIMESTAMP('2022-02-07T14:42:21.000Z')
    -- 2.15
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(2\.15|2\.14($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2021-10-15T17:04:00.000Z') AND TIMESTAMP('2021-11-04T11:51:53.000Z')
    -- 2.14
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(2\.14|2\.13($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2021-07-13T13:13:54.000Z') AND TIMESTAMP('2021-08-02T13:21:47.000Z')
    -- 2.13
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(2\.13|2\.12($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2021-04-20T20:01:07.000Z') AND TIMESTAMP('2021-05-12T14:18:05.000Z')
    -- 2.12
    -- AND REGEXP_CONTAINS(dl.file.version, r'^(2\.12|2\.11($|\.))') AND dl.timestamp BETWEEN TIMESTAMP('2021-01-18T18:00:30.000Z') AND TIMESTAMP('2021-02-02T16:47:42.000')
)
SELECT
  dl.file.version AS version,
  COUNT(*) AS downloads_count
FROM downloads AS dl
GROUP BY version
ORDER BY version DESC;
