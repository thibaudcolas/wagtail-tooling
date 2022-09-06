module.exports = async (page, scenario, viewport) => {
  // console.log(`clickSelector: ${scenario.label} @${viewport.label}`);
  let clickSelector = scenario.clickSelector;

  if (!Array.isArray(clickSelector)) {
    clickSelector = [clickSelector];
  }

  for (const selector of [].concat(clickSelector)) {
    await page.click(selector);
    await page.waitFor(500);
  }

  if (scenario.onReadySelector) {
    await page.waitFor(scenario.onReadySelector);
  }
};
