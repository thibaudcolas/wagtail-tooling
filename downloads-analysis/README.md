# Downloads analysis

Tools related to analyzing Wagtail downloads. Dataset: [PyPI on BigQuery](https://cloud.google.com/blog/topics/developers-practitioners/analyzing-python-package-downloads-bigquery)

## Release version numbers and dates

```bash
curl https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/wagtail/versions\?per_page\=500 > wagtail-versions.json
# Only keep numbers and dates.
cat wagtail-versions.json  | jq '.[] | "\(.number): \(.published_at)"' > wagtail-versions.txt
```

## Release candidate downloads

Produce [Wagtail release statistics](https://docs.google.com/spreadsheets/d/1eZ3OvpoHza1lSRzznZLh2qdbDE-RuhTmImndqg0Ugwk/edit) to understand usage patterns over time.

```bash
# Update to use the desired version number, then dry run.
cat release-candidate-downloads.sql | bq query --use_legacy_sql=false --dry_run 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
cat release-candidate-downloads.sql | bq query --use_legacy_sql=false --format=csv > release-candidate-downloads.csv
# Update to use the desired version number, then dry run.
cat release-candidate-total.sql | bq query --use_legacy_sql=false --dry_run 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
cat release-candidate-total.sql | bq query --use_legacy_sql=false --format=csv > release-candidate-total.csv
```

## New packages this week

Warning: expensive!

```bash
cat new-packages-this-week.sql | bq query --max_rows 500 --use_legacy_sql=false --dry_run 2>&1 | grep -o '[0-9]\+' | awk '{printf "%.2f GB\n", $1/1024/1024/1024}'
```

## Installer stats

See [pip poetry uv for Wagtail - installer statistics](https://docs.google.com/spreadsheets/d/14fval60fdh9YJftg3ysPpCcpX44kvTsr0MBbuAFPKQ4/edit?usp=sharing)

## CI installer stats

⚠️ Experimental - data interpretation is unclear, see [uv overtakes pip in CI (for Wagtail users)](https://wagtail.org/blog/uv-overtakes-pip-in-ci/) for more information.

See [pip poetry uv for Wagtail - installer statistics](https://docs.google.com/spreadsheets/d/14fval60fdh9YJftg3ysPpCcpX44kvTsr0MBbuAFPKQ4/edit?usp=sharing), and on the Python forum: [PyPI downloads statistics and continuous integration](https://discuss.python.org/t/pypi-downloads-statistics-and-continuous-integration/91810).

### What "CI" means

The "CI" True/null metadata is only available with pip and uv. There is no opportunity to conclusively determine an install isn’t in CI, so any "CI = true" numbers are a likely lower bound.

- It’s based on detect the following environment variables: `BUILD_BUILDID, BUILD_ID, CI, PIP_IS_CI`
- Implementation in uv: [looks_like_ci in linehaul.rs](https://github.com/astral-sh/uv/blob/0.7.3/crates/uv-client/src/linehaul.rs#L66-L69)
- Implementation in pip: [looks_like_ci in session.py](https://github.com/pypa/pip/blob/25.1.1/src/pip/_internal/network/session.py#L81-L107)
- Early discussion about the need for this in pip / PyPI: [Differentiating organic vs automated installations pypa/pip#5499](https://github.com/pypa/pip/issues/5499)
