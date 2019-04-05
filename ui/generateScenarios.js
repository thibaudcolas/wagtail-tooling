const DOMAIN = process.env.DOMAIN || "localhost:8000";

const composeScenario = (...args) => Object.assign({}, ...args);
const contentOnly = composeScenario.bind(null, {
  selectors: [".content-wrapper"],
});

const generateLabels = (scenario, index) => {
  let fullLabel = scenario.path;

  if (scenario.typeSelector) {
    if (Array.isArray(scenario.typeSelector)) {
      fullLabel += ` ${scenario.typeSelector.join(", ")}`;
    } else {
      fullLabel += ` ${scenario.typeSelector}`;
    }
  }

  if (scenario.clickSelector) {
    if (Array.isArray(scenario.clickSelector)) {
      fullLabel += ` ${scenario.clickSelector.join(", ")}`;
    } else {
      fullLabel += ` ${scenario.clickSelector}`;
    }
  }

  const label = fullLabel.substring(0, 100);

  return {
    index,
    label,
    fullLabel,
  };
};

const generateScenario = (scenario, index) => {
  return Object.assign(
    {
      url: `http://${DOMAIN}/admin${scenario.path}`,
      misMatchThreshold: 0.05,
      hideSelectors: [
        // Relative dates are dynamic, thus likely to break tests.
        // '.human-readable-date'
      ],
      onBeforeScript: "onBefore.js",
      onReadyScript: "onReady.js",
      cookies: {
        sessionid: process.env.WAGTAIL_SESSIONID,
      },
    },
    generateLabels(scenario, index),
    scenario,
  );
};

module.exports = {
  generateScenario,
  contentOnly,
};
