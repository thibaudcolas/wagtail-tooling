/**
 * This is evaluated in the CasperJS/PhantomJS/SlimerJS environment, not Node.
 * Caution is advised.
 */

module.exports = function(casper, scenario, vp) {
  casper.echo(`run onReady for ${scenario.label}, ${vp.name}`);
  casper.then(function() {
    this.evaluate(function() {
      // Would be cool to prevent inadvertant interactions.
      // document.body.style = 'pointer-events: none; user-select: none; -moz-user-select: none;';
      // var css = '* { pointer-events: none !important; user-select: none !important; -moz-user-select: none !important; }';
      // var head = document.head;
      // var style = document.createElement('style');
      // style.type = 'text/css';
      // style.appendChild(document.createTextNode(css));
      // head.appendChild(style);

      // TODO Break the tests if the user is not logged in – no point in testing.

      // Makes dates ("time since") static.
      [].slice.call(document.querySelectorAll('.human-readable-date')).forEach(function(date) {
        date.innerHTML = '16&nbsp;hours, 55&nbsp;minutes ago'
      });
    });
  });
};
