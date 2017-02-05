/**
 * This is evaluated in the CasperJS/PhantomJS/SlimerJS environment, not Node.
 * Caution is advised.
 */
var env = require('system').env;

var sessionid = env.WAGTAIL_SESSIONID;

module.exports = function(casper, scenario, vp) {
  casper.echo(`run onBefore for ${scenario.label}, ${vp.name}`);
  // casper.page.addCookie does not seem to work in SlimerJS (PhantomJS is ok).
  casper.then(function() {
    phantom.addCookie({
      name: 'sessionid',
      value: sessionid,
      domain: 'localhost',
      path: '/',
      httponly: true,
      secure: false,
      expires: null,
      expiry: null,
    });

    casper.page.settings = {
      javascriptEnabled: true,
    };
  });
};
