module.exports = async (page, scenario, viewport) => {
  console.log("SCENARIO > " + scenario.label);
  await require("./clickAndHoverHelper")(page, scenario);
  await require("./loadSVG")(page, scenario);

  await page.evaluate(() => {
    const consoleWarn = console.warn;

    console.warn = function filterWarnings(msg, ...args) {
      // Stop logging React warnings we shouldn’t be doing anything about at this time.
      const supressedWarnings = [
        "Warning: componentWillMount",
        "Warning: componentWillReceiveProps",
        "Warning: componentWillUpdate",
      ];

      if (!supressedWarnings.some((entry) => msg.includes(entry))) {
        consoleWarn.apply(console, ...args);
      }
    };

    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { isDisabled: true };

    const preventInteractionStyles = `
        * {
            cursor: none !important;
            pointer-events: none !important;
            user-select: none !important; -moz-user-select: none !important;
            animation-delay: 0.01s !important; -webkit-animation-delay: 0.01s !important;
            animation-duration: 0.01s !important; -webkit-animation-duration: 0.01s !important;
        }`;

    const preventAnimationStyles = `
        * {
            transition-property: none !important;
            transform: none !important;
            animation: none !important;
        }`;

    const style = document.createElement("style");
    style.innerHTML = `
        ${preventInteractionStyles}
        ${preventAnimationStyles}
        `;
    document.body.appendChild(style);

    // TODO Break the tests if the user is not logged in – no point in testing.

    // Makes dates ("time since") static.
    [].slice
      .call(document.querySelectorAll(".w-human-readable-date"))
      .forEach((date) => {
        date.innerHTML = "16&nbsp;hours, 55&nbsp;minutes ago";
      });
  });

  if (scenario.clickSelector) {
    const clickSelector = require("./clickSelector");
    await clickSelector(page, scenario, viewport);
  }

  // add more ready handlers here...
};
