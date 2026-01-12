# Online events carbon footprint

Based on data from Zoom Events analytics, focusing on information that is likely to be available in other platforms.

[Online conference footprint: Wagtail Space 2025](https://wagtail.org/blog/online-conference-footprint-wagtail-space-2025/)

## Initial setup

```sql
CREATE OR REPLACE TABLE sessions AS
SELECT * FROM read_csv_auto('SessionSummary.csv', header=true);
```

## Device statistics

```sql
SELECT
    SUM("Joined via mobile") as total_mobile_connections,
    SUM("Joined via desktop") as total_desktop_connections,
    SUM("Joined via phone") as total_phone_connections,
    SUM("Joined via mobile" + "Joined via desktop" + "Joined via phone") as total_device_connections,
    ROUND(100.0 * SUM("Joined via mobile") / SUM("Joined via mobile" + "Joined via desktop" + "Joined via phone"), 2) as mobile_pct,
    ROUND(100.0 * SUM("Joined via desktop") / SUM("Joined via mobile" + "Joined via desktop" + "Joined via phone"), 2) as desktop_pct
FROM sessions
WHERE "Session length"" IS NOT NULL;
```

## Locations

```sql
SELECT
    "Country/Region_*_General Admission" as country,
    COUNT(DISTINCT "Registrant email") as attendees,
    ROUND(SUM("Duration spent in session (mins)") / 60.0, 2) as total_hours
FROM attendance_details
WHERE "Joined session?" = true
  AND "Duration spent in session (mins)" IS NOT NULL
GROUP BY "Country/Region_*_General Admission"
ORDER BY total_hours DESC;
```