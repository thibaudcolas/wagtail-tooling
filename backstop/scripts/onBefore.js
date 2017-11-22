/**
 * This is evaluated in the Chrome environment, not Node.
 * Caution is advised.
 */
const loadCookies = require('./loadCookies');

module.exports = (chromy, scenario, viewport) => {
    console.log(`run onBefore for ${scenario.label}, ${viewport.label}`);
    loadCookies(chromy, scenario, viewport);
};
