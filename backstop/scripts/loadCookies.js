/**
 * This is evaluated in the Chrome environment, not Node.
 * Caution is advised.
 */

const getCookiesArray = (scenario) => {
  const url = scenario.url
    .split("/")
    .slice(0, 3)
    .join("/");

  return Object.keys(scenario.cookies).map((name) => {
    const value = scenario.cookies[name];

    return {
      httponly: true,
      url,
      name,
      value,
    };
  });
};

// eslint-disable-next-line no-unused-vars
module.exports = (chromy, scenario, viewport) => {
  // console.log(`loadCookies: ${scenario.label} @${viewport.label}`);

  chromy.setCookie(getCookiesArray(scenario));

  chromy.ignoreCertificateErrors();
};
