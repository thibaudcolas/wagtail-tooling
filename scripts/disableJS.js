/**
 * This is evaluated in the CasperJS/PhantomJS/SlimerJS environment, not Node.
 * Caution is advised.
 */
var onBefore = require('./onBefore');

module.exports = function(casper, scenario, vp) {
  onBefore(casper, scenario, vp);
  casper.echo(`run disableJS for ${scenario.label}, ${vp.name}`);

  casper.then(function() {
    casper.page.settings = {
      javascriptEnabled: false,
    };
  });

  casper.thenOpen(scenario.url);
};
