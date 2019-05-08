/**
 * This is evaluated in the Chrome environment, not Node.
 * Caution is advised.
 */

module.exports = async (page, scenario) => {
  const loadCookies = require("./loadCookies");

  await loadCookies(page, scenario);
};
