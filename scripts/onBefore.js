/**
 * This is evaluated in the Chrome environment, not Node.
 * Caution is advised.
 */
// var env = require('system').env;

var sessionid = 'zo818rce57oblizvanxu3hbc1n1mgpod';

module.exports = function(chromy, scenario, vp) {
  console.log(`run onBefore for ${scenario.label}, ${vp.name}`);
  chromy.setCookie({
    name: 'sessionid',
    value: sessionid,
    url: 'http://localhost:8000/',
    httponly: true,
  });

  chromy.ignoreCertificateErrors();
};
