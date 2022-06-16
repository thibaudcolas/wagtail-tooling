# Wagtail tooling

> QA tools for Wagtail core development, with a particular focus on UI.

## Getting started

This project contains a test suite for Wagtail, which generates:

- Visual regression testing cases for BackstopJS.
- Accessibility checks with Pa11y.
- A spreadsheet export to help with UI audits in Google Sheets.
- A Figma-friendly spreadsheet export to help with audits of UI screenshots.

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
