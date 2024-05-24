# Wagtail tooling

> QA tools for Wagtail core development, with a particular focus on UI.

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

You will also need to update the `loadSVG.js` file to contain an up-to-date copy of Wagtail’s icons sprite.

## Usage

### UI regression tests

```sh
# 1. Run UI regression tests.
npm run regression:test
# 2. Create UI regression reference.
npm run regression:approve
# 3. Open UI regression report.
npm run regression:open
```

### Documentation screenshots

We use `wagtail-tooling` to keep Wagtail’s documentation screenshots up-to-date. Using this tooling helps to:

1. Make sure screenshots use consistent sizes and uniform highlights
2. Automate the screenshot taking process
3. Know what screenshots do need updating, based on visual regression testing results

#### Demo sites

- [wagtail-tutorial-site](https://github.com/thibaudcolas/wagtail-tutorial-site) is Wagtail’s official getting started tutorial, to keep the tutorial screenshots up-to-date.
- [bakerydemo-editor-guide](https://github.com/thibaudcolas/bakerydemo-editor-guide) is an extension of Wagtail’s [bakerydemo](https://github.com/wagtail/bakerydemo) with additional content relevant for [guide.wagtail.org](https://guide.wagtail.org/en-latest/) and [docs.wagtail.org](https://docs.wagtail.org/).

#### Screenshot scenarios

See [`docs-screenshots/backstop.config.js`](docs-screenshots/backstop.config.js). There are three sets of scenarios which need toggling on and off with code comments in the `scenarios` array:

- docs.wagtail.org: tutorial
- docs.wagtail.org: extending admin views
- guide.wagtail.org

#### Commands

```sh
# 1. Run UI regression tests.
npm run docs:regression:test
# 2. Create UI regression reference.
npm run docs:regression:approve
# 3. Open UI regression report.
npm run docs:regression:open
```

#### Updating screenshots

After the regression testing is done, optimize images with [ImageOptim](https://imageoptim.com/mac) or equivalent, make a pull request to Wagtail, and follow [guide.wagtail.org Images docs](https://guide.wagtail.org/en-latest/contributing/#images).

Store the optimized images in [wagtail-tooling-screenshots](https://github.com/thibaudcolas/wagtail-tooling-screenshots). Though not a must, this helps with future screenshot taking runs so we can identify the screenshots that have actually changed and require updating.

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

## References

- <https://github.com/garris/BackstopJS>
- <https://pa11y.org/>
- <https://pptr.dev/>
- <https://chromedevtools.github.io/devtools-protocol/>
