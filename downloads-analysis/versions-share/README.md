# Wagtail versions share

```sql
create table dl as select * from './versions-over-time-daily.csv.zst';
create table feature_versions as select
    day,
    regexp_extract(version, '^(\d+\.\d+)') as minor_version,
    sum(num_downloads) as total_downloads
from dl
group by day, minor_version
order by day, minor_version;
```
