/**
 * This is evaluated in the Chrome environment, not Node.
 * Caution is advised.
 */

module.exports = async (page, scenario, viewport) => {
  // console.log(`clickSelector: ${scenario.label} @${viewport.label}`);
  let clickSelector = scenario.clickSelector;

  if (!Array.isArray(clickSelector)) {
    clickSelector = [clickSelector];
  }

  const isMobile = viewport.width < 800;
  const isInSidebar =
    (await page.$(`.nav-wrapper ${clickSelector[0]}`)) !== null;

  if (isMobile && isInSidebar) {
    await page.click("#nav-toggle");
    await page.click(clickSelector[0]);
    await page.waitFor(100);
  }

  for (const selector of [].concat(clickSelector)) {
    await page.click(selector);
    await page.waitFor(500);
  }

  if (scenario.onReadySelector) {
    await page.waitFor(scenario.onReadySelector);
  }
};
