const fs = require("fs");

module.exports = async (page, scenario) => {
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

  // MUNGE COOKIE DOMAIN
  cookies = cookies.map((cookie) => {
    if (
      cookie.domain.startsWith("http://") ||
      cookie.domain.startsWith("https://")
    ) {
      cookie.url = cookie.domain;
    } else {
      cookie.url = "https://" + cookie.domain;
    }
    delete cookie.domain;
    return cookie;
  });

  // SET COOKIES
  const setCookies = async () => {
    return Promise.all(
      cookies.map(async (cookie) => {
        await page.setCookie(cookie);
      }),
    );
  };
  await setCookies();
};
