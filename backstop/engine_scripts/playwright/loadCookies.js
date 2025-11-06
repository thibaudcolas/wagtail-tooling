const fs = require("fs");

module.exports = async (browserContext, scenario) => {
  let cookies = [];

  if (scenario.sessionid) {
    cookies.push({
      domain: "localhost",
      path: "/",
      name: "sessionid",
      value: scenario.sessionid,
      expirationDate: new Date().getTime() / 1000 + 60 * 60 * 24 * 30, // 30 days
      hostOnly: false,
      httpOnly: false,
      secure: false,
      session: false,
      sameSite: "Lax",
    });
  }

  if (scenario.auto_login) {
    cookies.push({
      domain: "localhost",
      path: "/",
      name: "auto_login",
      value: scenario.auto_login,
      expirationDate: new Date().getTime() / 1000 + 60 * 60 * 24 * 30, // 30 days
      hostOnly: false,
      httpOnly: false,
      secure: false,
      session: false,
      sameSite: "Lax",
    });
  }

  // Add cookies to browser
  browserContext.addCookies(cookies);
};
