# UI benchmarks with Lighthouse

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
