require('dotenv').config();

var sessionid = process.env.WAGTAIL_SESSIONID;

console.log(sessionid);

module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      // Open the URL an extra time in the script, just to set the cookie. Wasteful.
      return driver.get(context.url)
        .then(() => {
          return driver.manage().addCookie({
            name: 'sessionid',
            value: sessionid,
            domain: 'localhost',
            path: '/',
            httponly: true,
            secure: false,
            expires: null,
            expiry: null,
            });
        });
    })
  }
};
