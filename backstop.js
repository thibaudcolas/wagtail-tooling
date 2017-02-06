require('dotenv').config();

if (!process.env.WAGTAIL_SESSIONID) {
  throw new ReferenceError('Environment variable WAGTAIL_SESSIONID is not defined.');
}

const domain = 'localhost:8000';

const composeScenario = (...args) => Object.assign({}, ...args);
const contentOnly = composeScenario.bind(null, { selectors : [ '.content-wrapper' ]});
const clickSelector = (clickSelector) => composeScenario.bind(null, { clickSelector, onReadyScript: 'clickSelector.js' });

const scenarios = [
  { path: '/login', onBeforeScript: null },
  { path: '/', label: 'No JS', onBeforeScript: 'disableJS.js' },
  { path: '/', selectors: [ '.nav-wrapper', '.content-wrapper' ]},
  clickSelector('.dl-trigger')({ path: '/', label: 'Explorer' }),
  clickSelector('.submenu-trigger')({ path: '/', label: 'Settings' }),
  clickSelector('#account-settings')({ path: '/', selectors: [ '.nav-wrapper' ], label: 'Account settings' }),
  clickSelector('#nav-toggle')({ path: '/', label: 'Mobile nav' }),
  contentOnly({ path: '/pages/' }),
  contentOnly({ path: '/pages/search/?q=index' }),
  contentOnly({ path: '/pages/5/' }),
  contentOnly({ path: '/pages/5/edit' }),
  contentOnly(clickSelector('[href*="promote"]')({ path: '/pages/5/edit/#promote' })),
  contentOnly(clickSelector('[href*="settings"]')({ path: '/pages/5/edit/#settings' })),
  // TODO Test date UI on settings tab.
  contentOnly(clickSelector('[href*="privacy"]')({ path: '/pages/5/edit/#privacy' })),
  // TODO Only works well once every two clicks (toggle).
  contentOnly(clickSelector('.dropdown-toggle')({ path: '/pages/5/edit/#dropdown-toggle', label: 'Page dropdown' })),
  contentOnly(clickSelector('.page-chooser .chosen .action-choose')({ path: '/pages/5/edit/', label: 'Page chooser' })),
  contentOnly(clickSelector('.document-chooser .unchosen .action-choose')({ path: '/pages/5/edit/', label: 'Document chooser' })),
  contentOnly({ path: '/pages/5/revisions/' }),
  contentOnly({ path: '/pages/5/unpublish/' }),
  contentOnly({ path: '/pages/5/delete/' }),
  contentOnly({ path: '/pages/5/copy/' }),
  contentOnly({ path: '/pages/5/move/' }),
  contentOnly({ path: '/pages/5/add_subpage/' }),
  // // Does not work on my instance.
  // // contentOnly({ path: '/images/'}),
  contentOnly({ path: '/images/add/'}),
  contentOnly({ path: '/documents/' }),
  contentOnly({ path: '/documents/edit/3/' }),
  contentOnly({ path: '/documents/multiple/add/' }),
  contentOnly({ path: '/snippets/' }),
  contentOnly({ path: '/snippets/demo/advert/' }),
  contentOnly({ path: '/snippets/demo/advert/1/' }),
  contentOnly({ path: '/snippets/demo/advert/add/' }),
  contentOnly({ path: '/users/' }),
  contentOnly({ path: '/users/1/' }),
  contentOnly({ path: '/users/add/' }),
  contentOnly(clickSelector('[href*="roles"]')({ path: '/users/add/#roles' })),
  contentOnly({ path: '/groups/' }),
  contentOnly({ path: '/groups/1/' }),
  contentOnly({ path: '/groups/add/' }),
  contentOnly({ path: '/sites/' }),
  contentOnly({ path: '/sites/1/' }),
  contentOnly({ path: '/sites/add/' }),
  contentOnly({ path: '/collections/' }),
  contentOnly({ path: '/collections/add/' }),
  contentOnly({ path: '/redirects/' }),
  contentOnly({ path: '/redirects/add/' }),
  contentOnly({ path: '/searchpicks/' }),
  contentOnly({ path: '/searchpicks/add/' }),
  contentOnly(clickSelector('#id_query_string-chooser')({ path: '/searchpicks/add/', label: 'Search term chooser' })),
  contentOnly({ path: '/account/' }),
  contentOnly({ path: '/account/change_password/' }),
  contentOnly({ path: '/account/notification_preferences/' }),
  // Revokes the session cookie, which is annoying when testing.
  // { path: '/admin/logout' },
  // Loading spinner always makes the test fail.
  // { path: '/admin/pages/preview' },
].map((scenario, i) => {
  return Object.assign({
    url: `http://${domain}/admin${scenario.path}`,
    label:`${scenario.path} ${i}`,
    misMatchThreshold: 0.01,
    hideSelectors: [
      // Relative dates are dynamic, thus likely to break tests.
      // '.human-readable-date'
    ],
    onBeforeScript: 'onBefore.js',
    onReadyScript: 'onReady.js',
  }, scenario);
});

module.exports = {
  id: 'wagtaildemo_master',
  viewports: [
    {
      name: 'phone',
      width: 320,
      height: 480
    },
    {
      name: 'tablet_portrait',
      width: 768,
      height: 1024
    },
    {
      name: 'tablet_landscape',
      width: 1024,
      height: 768
    },
    {
      name: 'desktop',
      // Maximum width of the Wagtail UI.
      width: 1440,
      height: 900,
    },
  ],
  scenarios: scenarios,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    casper_scripts: 'scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  engine: 'slimerjs',
  report: ['CI'],
  debug: false
}
