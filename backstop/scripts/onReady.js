/**
 * This is evaluated in the Chrome environment, not Node.
 * Caution is advised.
 */
const clickSelector = require('./clickSelector');

module.exports = (chromy, scenario, viewport) => {
    console.log(
        `onReady: ${scenario.index} ${scenario.fullLabel} @${viewport.label}`,
    );

    chromy.evaluate(() => {
        const preventInteractionStyles = `
        * {
            cursor: none !important;
            pointer-events: none !important;
            user-select: none !important; -moz-user-select: none !important;
            animation-delay: 0.01s !important; -webkit-animation-delay: 0.01s !important;
            animation-duration: 0.01s !important; -webkit-animation-duration: 0.01s !important;
        }`;

        const style = document.createElement('style');
        style.innerHTML = preventInteractionStyles;
        document.body.appendChild(style);

        // TODO Break the tests if the user is not logged in – no point in testing.

        // Makes dates ("time since") static.
        [].slice
            .call(document.querySelectorAll('.human-readable-date'))
            .forEach(date => {
                date.innerHTML = '16&nbsp;hours, 55&nbsp;minutes ago';
            });
    });

    if (scenario.clickSelector) {
        clickSelector(chromy, scenario, viewport);
    }
};
