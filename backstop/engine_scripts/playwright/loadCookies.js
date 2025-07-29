const fs = require("fs");

module.exports = async (browserContext, scenario) => {
  let cookies = [
    {
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
    },
  ];

  // Add cookies to browser
  browserContext.addCookies(cookies);
};
