/**
 * This is evaluated in the Chrome environment, not Node.
 * Caution is advised.
 */

module.exports = (chromy, scenario, viewport) => {
    // console.log(`clickSelector: ${scenario.label} @${viewport.label}`);
    let clickSelector = scenario.clickSelector;

    if (!Array.isArray(clickSelector)) {
        clickSelector = [clickSelector];
    }

    const isMobile = viewport.width < 800;
    const isInSidebar = chromy.exists(`.nav-wrapper ${clickSelector[0]}`);

    if (isMobile && isInSidebar) {
        chromy.click('#nav-toggle');
        chromy.wait(100);
    }

    let typeSelector = scenario.typeSelector;
    if (typeSelector) {
        if (!Array.isArray(typeSelector)) {
            typeSelector = [typeSelector];
        }

        typeSelector.forEach(selector => {
            chromy.type(selector, 'test');
            chromy.wait(500);
        });
    }

    clickSelector.forEach(selector => {
        chromy.click(selector);
        chromy.wait(500);
    });

    if (scenario.onReadySelector) {
        chromy.wait(scenario.onReadySelector);
    }
};
