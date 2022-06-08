require("dotenv").config();

const scenarios = require("../ui/scenarios");

process.setMaxListeners(0);

const WAGTAIL_SESSIONID = process.env.WAGTAIL_SESSIONID;

if (!WAGTAIL_SESSIONID) {
  throw new ReferenceError("WAGTAIL_SESSIONID is not defined.");
}

const scenarioLabels = scenarios.map((s) => s.label);
const duplicateScenarioLabels = scenarioLabels.filter(
  (l, i) => scenarioLabels.indexOf(l) !== i,
);

if (duplicateScenarioLabels.length !== 0) {
  console.log(duplicateScenarioLabels);
  throw new Error("Two scenarios cannot use the same label");
}

// const FILTER = /.*rich.*/;
const FILTER = null;

const testScenarios = scenarios
  .map((s) => ({
    sessionid: s.unauthenticated ? "invalid" : WAGTAIL_SESSIONID,
    ...s,
  }))
  .filter((s) => !Boolean(s.skip))
  .filter((s) => (FILTER ? s.label.match(FILTER) : true));

module.exports = {
  debug: false,
  debugWindow: false,
  id: "bakerydemo",
  viewports: [
    {
      label: "1024x1400",
      width: 1024,
      height: 1400,
    },
  ],
  scenarios: testScenarios,
  onBeforeScript: "puppeteer/onBefore.js",
  onReadyScript: "puppeteer/onReady.js",
  paths: {
    bitmaps_reference: "backstop/data/bitmaps_reference",
    bitmaps_test: "backstop/data/bitmaps_test",
    engine_scripts: "backstop/engine_scripts",
    html_report: "backstop/data/html_report",
    ci_report: "backstop/data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
};
