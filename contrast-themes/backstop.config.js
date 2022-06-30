const baseConfig = require("../backstop/backstop.config");

module.exports = {
  ...baseConfig,
  scenarios: baseConfig.scenarios.map((s) => ({
    ...s,
    // emulateVisionDeficiency: "achromatopsia",
    emulateMediaFeatures: [
      { name: "forced-colors", value: "active" },
      { name: "prefers-contrast", value: "more" },
    ],
  })),
};
