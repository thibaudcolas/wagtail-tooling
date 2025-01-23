#!/usr/bin/env bash

for file in *.json; do
  # Extract the metrics using jq
  performance=$(jq '.categories.performance.score' "$file")
  fcp=$(jq '.audits["first-contentful-paint"].numericValue' "$file")
  lcp=$(jq '.audits["largest-contentful-paint"].numericValue' "$file")
  tbt=$(jq '.audits["total-blocking-time"].numericValue' "$file")
  cls=$(jq '.audits["cumulative-layout-shift"].numericValue' "$file")
  speed_index=$(jq '.audits["speed-index"].numericValue' "$file")
  # accessibility=$(jq '.categories.accessibility.score' "$file")
  # best_practices=$(jq '.categories["best-practices"].score' "$file")
  # seo=$(jq '.categories.seo.score' "$file")
  tti=$(jq '.audits["interactive"].numericValue' "$file")
  fid=$(jq '.audits["max-potential-fid"].numericValue' "$file")

  echo "File: $file"
  echo "Performance: $performance"
  echo "FCP: $fcp"
  echo "LCP: $lcp"
  echo "TBT: $tbt"
  echo "CLS: $cls"
  echo "Speed Index: $speed_index"
  # echo "Accessibility: $accessibility"
  # echo "Best Practices: $best_practices"
  # echo "SEO: $seo"
  echo "TTI: $tti"
  echo "Max Potential FID: $fid"
done
