# Wagtail tooling

> QA tools for Wagtail core development, with a particular focus on UI.

## Getting started

This project contains a test suite for Wagtail, which generates:

- Visual regression testing cases for BackstopJS.
- Accessibility checks with Pa11y.
- A spreadsheet export to help with UI audits in Google Sheets.
- A Figma-friendly spreadsheet export to help with audits of UI screenshots.

## Examples

### Visual regression

- Visual regression testing report: [2022-06-29 sample Wagtail 4.0dev Backstop.js report](https://wagtail-tooling-sample-reports.netlify.app/20220629-backstop_sample_report/html_report/index.html)
- Contrast themes screenshots: [2022-06-29 Wagtail 4.0 light high contrast screenshots](https://wagtail-tooling-sample-reports.netlify.app/20220629-contrast-sample/html_report/index.html)

### Accessibility tests

- Accessibility checks report: [2022-06-30 Pa11y + Lighthouse report](https://wagtail-tooling-sample-reports.netlify.app/20220630-pa11y/index.html)

### Reports

- Spreadsheet export: [Wagtail | 3.0 → 4.0 UI overview – Views](https://docs.google.com/spreadsheets/d/1WaqARpHf99U0O94hypwHNjHA9yNpn4AnXnIT5AdJsm8/edit#gid=1962441802)
- Figma-friendly spreadsheet export: [3.0 → 4.0 Figma sync sheet](https://docs.google.com/spreadsheets/d/1WaqARpHf99U0O94hypwHNjHA9yNpn4AnXnIT5AdJsm8/edit#gid=414045255)
- Manually-created Figma UI inventory: [Figma – Wagtail 3 UI inventory – Views](https://www.figma.com/file/3SZAkXYKTo52047weXDvb9/Wagtail-3-UI-Inventory?node-id=6609%3A37945)

## Installation

```sh
# Get the code from the repository.
git clone git@github.com:thibaudcolas/wagtail-tooling.git
cd wagtail-tooling
# Install dependencies.
nvm install
npm install
# Configure environment variables.
touch .env
# Configure Wagtail user session ID to use.
# Get this value by logging into the Wagtail admin of your site, then
# use the developer tools to insect the cookies, to find "sessionid".
# echo "WAGTAIL_SESSIONID=yoursessionid" >> .env
```

## UI regression tests

```sh
# 1. Run UI regression tests.
npm run regression:test
# 2. Create UI regression reference.
npm run regression:approve
# 3. Open UI regression report.
npm run regression:open
```

## Documentation

- <https://github.com/garris/BackstopJS>
- <https://pa11y.org/>
- <https://pptr.dev/>
- <https://chromedevtools.github.io/devtools-protocol/>
