module.exports = async (page, scenario) => {
  if (!scenario.unauthenticated) {
    await page.setCookie({
      name: "sessionid",
      domain: "localhost",
      path: "/",
      value: scenario.sessionid,
      expirationDate: 1798790400,
      hostOnly: false,
      httpOnly: false,
      secure: false,
      session: false,
      sameSite: "no_restriction",
    });
  }
};
