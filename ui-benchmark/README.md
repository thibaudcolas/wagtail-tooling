# UI benchmarks with Lighthouse

Set up for [Wagtail 6.3 Admin UI performance testing & benchmark #12241](https://github.com/wagtail/wagtail/issues/12241).

## How to run

```bash
export TEST_ORIGIN=https://static-wagtail-v5-1.netlify.app
./node_modules/.bin/lhci collect
./node_modules/.bin/lhci upload
# Reformat the data to help with comparisons between versions.
perl -pi -e 's/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app\/static\//wagtail.app\/static\//g' reports/*.{json,html}
perl -pi -e 's/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app\/admin\/jsi18n\//wagtail.app\/admin\/jsi18n\/\//g' reports/*.{json,html}
perl -pi -e 's/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app\/admin\/sprite-[0-9a-z]+\//wagtail.app\/admin\/sprite\//g' *.{json,html}
perl -pi -e 's/"url":"https:\/\/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app/"url":"https:\/\/wagtail.app/g' *.{json,html}
perl -pi -e 's/"origin":"https:\/\/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app/"origin":"https:\/\/wagtail.app/g' *.{json,html}
perl -pi -e 's/"origins":\["https:\/\/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app/"origins":["https:\/\/wagtail.app/g' *.{json,html}
perl -pi -e 's/"name":"https:\/\/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app/"name":"https:\/\/wagtail.app/g' *.{json,html}
perl -pi -e 's/,"https:\/\/static-wagtail-v[0-9]+-[0-9]+\.netlify\.app/,"https:\/\/wagtail.app/g' *.{json,html}
perl -pi -e 's/wagtail\.io/wagtail.org/g' *.{json,html}
```

## Results

Results are published in [thibaudcolas/wagtail-tooling-artifacts](https://github.com/thibaudcolas/wagtail-tooling-artifacts).

Here is a sample report: [Comparison the Wagtail styleguide page on Wagtail v6.2 and v6.3](https://googlechrome.github.io/lighthouse-ci/difftool/?baseReport=https://thibaudcolas.github.io/wagtail-tooling-artifacts/lighthouse-reports/static_wagtail_v6_2_netlify_app-_admin_styleguide_-2024_11_12_11_17_45.report.json&compareReport=https://thibaudcolas.github.io/wagtail-tooling-artifacts/lighthouse-reports/static_wagtail_v6_3_netlify_app-_admin_styleguide_-2024_11_12_11_27_27.report.json).

See [Wagtail 6.3 performance audit metrics](https://docs.google.com/spreadsheets/d/1oAPZFdAO4wlfp_knreriRrI5WhId6JCFV5hH-Uqj6IA/edit?gid=0#gid=0) for project metrics in particular.
