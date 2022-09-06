require("dotenv").config();

const WAGTAIL_SESSIONID = process.env.WAGTAIL_SESSIONID;

if (!WAGTAIL_SESSIONID) {
  throw new ReferenceError("WAGTAIL_SESSIONID is not defined.");
}

const docsScenarios = [
  {
    label: "docs_2",
    url: "http://localhost:8000/admin/",
  },
  {
    label: "docs_3",
    url: "http://localhost:8000/",
  },
  {
    label: "docs_4a",
    url: "http://localhost:8000/admin/pages/3/",
    clickSelector: "[data-hover-tooltip-content='Actions']",
    highlightSelector:
      "[data-hover-tooltip-content='Actions'][aria-expanded='true']",
  },
  {
    label: "docs_4b",
    url: "http://localhost:8000/admin/pages/5/add_subpage/",
    highlightSelector: '[href="/admin/pages/add/blog/blogpage/5/"]',
  },
  {
    label: "docs_5",
    url: "http://localhost:8000/admin/pages/6/edit/",
  },
  {
    label: "docs_7",
    url: "http://localhost:8000/our-blog/",
  },
  {
    label: "docs_6",
    url: "http://localhost:8000/our-blog/second-post/",
  },
  {
    label: "docs_8",
    url: "http://localhost:8000/admin/pages/7/edit/",
  },
  {
    label: "docs_9",
    url: "http://localhost:8000/tags/?tag=bread",
  },
  {
    label: "docs_10",
    url: "http://localhost:8000/our-blog/second-post/",
  },
];

const scenarios = [...docsScenarios];

// const FILTER = /.*rich.*/;
const FILTER = null;

const testScenarios = scenarios
  .map((s) => ({
    sessionid: s.unauthenticated ? "invalid" : WAGTAIL_SESSIONID,
    ...s,
  }))
  .filter((s) => !Boolean(s.skip))
  .filter((s) => (FILTER ? s.label.match(FILTER) : true));

const scenarioLabels = testScenarios.map((s) => s.label);
const duplicateScenarioLabels = scenarioLabels.filter(
  (l, i) => scenarioLabels.indexOf(l) !== i,
);

if (duplicateScenarioLabels.length !== 0) {
  console.log(duplicateScenarioLabels);
  throw new Error("Two scenarios cannot use the same label");
}

module.exports = {
  debug: false,
  debugWindow: false,
  id: "docs",
  viewports: [
    {
      label: "1280x800",
      width: 1280,
      height: 800,
    },
  ],
  fileNameTemplate: "{scenarioLabel}",
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
