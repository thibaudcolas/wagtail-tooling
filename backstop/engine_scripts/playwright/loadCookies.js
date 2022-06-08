const fs = require("fs");

module.exports = async (browserContext, scenario) => {
  let cookies = [
    {
      domain: "localhost",
      path: "/",
      name: "sessionid",
      value: scenario.sessionid,
      expirationDate: 1798790400,
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
