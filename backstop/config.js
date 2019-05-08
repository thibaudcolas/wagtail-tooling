require("dotenv").config();

process.setMaxListeners(0);

const path = require("path");

const viewports = require("./viewports");
const scenarios = require("./scenarios");

const WAGTAIL_SESSIONID = process.env.WAGTAIL_SESSIONID;

if (!WAGTAIL_SESSIONID) {
  throw new ReferenceError(
    "Environment variable WAGTAIL_SESSIONID is not defined.",
  );
}

const scenarioLabels = scenarios.map((s) => s.label);
const duplicateScenarioLabels = scenarioLabels.filter(
  (l, i) => scenarioLabels.indexOf(l) !== i,
);

if (duplicateScenarioLabels.length !== 0) {
  console.log(duplicateScenarioLabels);
  throw new Error("Two scenarios cannot use the same label");
}

const FILTER = null; // /.*rich.*/;

const testScenarios = scenarios
  .map((s) =>
    Object.assign(
      {
        sessionid: WAGTAIL_SESSIONID,
      },
      s,
    ),
  )
  .filter((s) => (FILTER ? s.label.match(FILTER) : true));

module.exports = {
  debug: false,
  debugWindow: false,
  id: "bakerydemo",
  viewports: viewports,
  scenarios: testScenarios,
  paths: {
    bitmaps_reference: path.join(__dirname, "data", "bitmaps_reference"),
    bitmaps_test: path.join(__dirname, "data", "bitmaps_test"),
    engine_scripts: path.join(__dirname, "scripts"),
    html_report: path.join(__dirname, "data", "html_report"),
    ci_report: path.join(__dirname, "data", "ci_report"),
  },
  engine: "puppeteer",
  // report: ["CI"],
  report: ["browser"],
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
};
