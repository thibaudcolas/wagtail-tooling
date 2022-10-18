const baseConfig = require("../backstop/backstop.config");

module.exports = {
  ...baseConfig,
  paths: {
    ...baseConfig.paths,
    bitmaps_reference: `${__dirname}/data/bitmaps_reference`,
    bitmaps_test: `${__dirname}/data/bitmaps_test`,
    html_report: `${__dirname}/data/html_report`,
    ci_report: `${__dirname}/data/ci_report`,
  },
  scenarios: baseConfig.scenarios.map((s) => ({
    ...s,
    // emulateVisionDeficiency: "achromatopsia",
    // emulateMediaFeatures: [
    //   { name: "forced-colors", value: "active" },
    //   { name: "prefers-contrast", value: "more" },
    // ],
  })),
};
