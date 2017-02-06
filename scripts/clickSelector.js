/**
 * This is evaluated in the CasperJS/PhantomJS/SlimerJS environment, not Node.
 * Caution is advised.
 */
var onReady = require('./onReady');

module.exports = function(casper, scenario, vp) {
  onReady(casper, scenario, vp);
  casper.echo(`run clickSelector for ${scenario.label}, ${vp.name}, ${scenario.clickSelector}`);

  casper.then(function() {
    var isMobile = ['phone', 'tablet_portrait'].indexOf(vp.name) !== -1;
    var inSidebar = ['.dl-trigger', '.submenu-trigger', '#account-settings'].indexOf(scenario.clickSelector) !== -1;
    if (isMobile && inSidebar) {
      this.click('#nav-toggle');
      this.wait(1000);
    }

    this.click(scenario.clickSelector);
    this.wait(1500);
  });
};
