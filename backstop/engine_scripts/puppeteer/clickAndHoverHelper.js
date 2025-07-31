module.exports = async (page, scenario) => {
  const hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
  const focusSelector = scenario.focusSelectors || scenario.focusSelector;
  const clickSelector = scenario.clickSelectors || scenario.clickSelector;
  const hoverAfterClickSelector =
    scenario.hoverAfterClickSelectors || scenario.hoverAfterClickSelector;
  const keyPressSelector =
    scenario.keyPressSelectors || scenario.keyPressSelector;
  const scrollToSelector = scenario.scrollToSelector;
  const typeSelectSelector = scenario.typeSelectSelector;
  const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  if (focusSelector) {
    for (const focusSelectorIndex of [].concat(focusSelector)) {
      // await page.waitForSelector(focusSelectorIndex);
      await page.focus(focusSelectorIndex);
    }
  }

  if (keyPressSelector) {
    for (const keyPressSelectorItem of [].concat(keyPressSelector)) {
      await page.waitForSelector(keyPressSelectorItem.selector);
      await page.type(
        keyPressSelectorItem.selector,
        keyPressSelectorItem.keyPress,
      );
    }
  }

  if (typeSelectSelector) {
    await page.type(typeSelectSelector, "Hello, ");
    await page.keyboard.down("ShiftLeft");
    for (let i = 0; i < "Hello, ".length; i += 1) {
      await page.keyboard.press("ArrowLeft");
    }
    await new Promise((r) => setTimeout(r, 100));
  }

  if (hoverSelector) {
    for (const hoverSelectorIndex of [].concat(hoverSelector)) {
      await page.waitForSelector(hoverSelectorIndex);
      await page.hover(hoverSelectorIndex);
    }
  }

  if (clickSelector) {
    for (const clickSelectorIndex of [].concat(clickSelector)) {
      await page.waitForSelector(clickSelectorIndex);
      await page.click(clickSelectorIndex);
    }
  }

  if (hoverAfterClickSelector) {
    for (const index of [].concat(hoverAfterClickSelector)) {
      await page.waitForSelector(index);
      await page.hover(index);
    }
  }

  if (postInteractionWait) {
    await new Promise((r) => setTimeout(r, postInteractionWait));
  }

  if (scrollToSelector) {
    await page.waitForSelector(scrollToSelector);
    await page.evaluate((scrollToSelector) => {
      document.querySelector(scrollToSelector).scrollIntoView();
    }, scrollToSelector);
  }
};
