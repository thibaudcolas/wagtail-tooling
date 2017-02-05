/**
 * This is evaluated in the CasperJS/PhantomJS/SlimerJS environment, not Node.
 * Caution is advised.
 */
var onReady = require('./onReady');

module.exports = function(casper, scenario, vp) {
  onReady(casper, scenario, vp);
  casper.echo(`run clickSelector for ${scenario.label}, ${vp.name}, ${scenario.clickSelector}`);

  casper.then(function(){
    this.click(scenario.clickSelector);
  });
};
