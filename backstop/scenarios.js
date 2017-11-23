const DOMAIN = 'localhost:8000';

const composeScenario = (...args) => Object.assign({}, ...args);
const contentOnly = composeScenario.bind(null, {
    selectors: ['.content-wrapper'],
});

const generateScenario = (scenario, i) => {
    let label = `${scenario.path} ${i}`;

    if (scenario.clickSelector) {
        if (Array.isArray(scenario.clickSelector)) {
            label += ` ${scenario.clickSelector.join(', ')}`;
        } else {
            label += ` ${scenario.clickSelector}`;
        }
    }

    return Object.assign(
        {
            label,
            url: `http://${DOMAIN}/admin${scenario.path}`,
            misMatchThreshold: 0.01,
            hideSelectors: [
                // Relative dates are dynamic, thus likely to break tests.
                // '.human-readable-date'
            ],
            onBeforeScript: 'onBefore.js',
            onReadyScript: 'onReady.js',
            cookies: {
                sessionid: process.env.WAGTAIL_SESSIONID,
            },
        },
        scenario,
    );
};

const PAGE_ID = 60;

const base = [
    { path: '/login', onBeforeScript: null },
    // No way to disable JavaScript with Chromy at the moment.
    // { path: '/', label: 'No JS', onBeforeScript: 'disableJS.js' },
    { path: '/', selectors: ['.nav-wrapper', '.content-wrapper'] },
    { path: '/404' },
    contentOnly({ path: `/pages/${PAGE_ID}/edit/` }),
    contentOnly({ path: '/styleguide/' }),
    // Revokes the session cookie, which is annoying when testing.
    // { path: '/admin/logout' },
    // Loading spinner always makes the test fail.
    // { path: '/admin/pages/preview' },
];

const nav = [
    {
        path: '/',
        selectors: ['.nav-wrapper'],
        clickSelector: '#account-settings',
    },
    {
        path: '/',
        clickSelector: '.submenu-trigger.icon-cogs',
    },
    {
        path: '/',
        clickSelector: '.submenu-trigger.icon-fa-cutlery',
    },
    {
        path: '/',
        clickSelector: '[data-explorer-menu-item] > a',
    },
    {
        path: '/',
        clickSelector: [
            '[data-explorer-menu-item] > a',
            '.c-explorer__item__action:last-of-type',
        ],
    },
];

const pages = [
    contentOnly({ path: '/pages/' }),
    contentOnly({ path: '/pages/search/?q=bread' }),
    contentOnly({ path: '/pages/search/?q=test123456' }),
    contentOnly({ path: `/pages/${PAGE_ID}/` }),
    contentOnly({ path: `/pages/${PAGE_ID}/edit/` }),
    contentOnly({ path: `/pages/${PAGE_ID}/revisions/` }),
    contentOnly({ path: `/pages/${PAGE_ID}/unpublish/` }),
    contentOnly({ path: `/pages/${PAGE_ID}/delete/` }),
    contentOnly({ path: `/pages/${PAGE_ID}/copy/` }),
    contentOnly({ path: `/pages/${PAGE_ID}/move/` }),
    contentOnly({ path: `/pages/${PAGE_ID}/add_subpage/` }),
    // TODO
];

const modeladmin = [];

const images = [];

const documents = [
    contentOnly({ path: '/documents/' }),
    contentOnly({ path: '/documents/?collection_id=2' }),
    // TODO Missing existing document edit / delete views.
    contentOnly({ path: '/documents/multiple/add/' }),
];

const snippets = [
    contentOnly({ path: '/snippets/' }),
    contentOnly({ path: '/snippets/base/people/' }),
    contentOnly({ path: '/snippets/base/people/1/' }),
    contentOnly({ path: '/snippets/base/people/1/delete/' }),
    contentOnly({ path: '/snippets/base/people/add/' }),
];

const forms = [
    contentOnly({ path: '/forms/' }),
    contentOnly({ path: '/forms/submissions/69/' }),
    contentOnly({
        path: '/forms/submissions/69/',
        clickSelector: [
            '[name="date_to"]',
            '[data-date="9"][data-month="0"][data-year="2050"]',
        ],
    }),
    contentOnly({
        path:
            '/forms/submissions/69/?date_from=2017-01-01&date_to=2050-01-01&action=filter',
    }),
    contentOnly({
        path: '/forms/submissions/69/',
        clickSelector: '[name="selected-submissions"]',
    }),
];

const settings = [
    contentOnly({ path: '/users/' }),
    contentOnly({ path: '/users/3/' }),
    contentOnly({ path: '/users/add/' }),
    contentOnly({
        path: '/users/add/',
        clickSelector: '[href*="roles"]',
    }),
    contentOnly({
        path: '/admin/users/?q=admin',
    }),
    contentOnly({ path: '/groups/' }),
    contentOnly({ path: '/groups/?q=edi' }),
    contentOnly({ path: '/groups/1/' }),
    contentOnly({
        path: '/groups/1/',
        clickSelector: [
            '#id_page_permissions-ADD',
            '#id_document_permissions-ADD',
            '#id_image_permissions-ADD',
            '#id_page_permissions-0-DELETE-button',
            '#id_document_permissions-0-DELETE-button',
            '#id_image_permissions-0-DELETE-button',
        ],
    }),
    contentOnly({ path: '/groups/2/delete/' }),
    contentOnly({ path: '/groups/new/' }),
    contentOnly({ path: '/sites/' }),
    contentOnly({ path: '/sites/2/' }),
    contentOnly({ path: '/sites/2/delete/' }),
    contentOnly({ path: '/sites/new/' }),
    contentOnly({ path: '/collections/' }),
    contentOnly({ path: '/collections/2/' }),
    contentOnly({
        path: '/collections/2/',
        clickSelector: '.action-set-privacy',
    }),
    contentOnly({ path: '/collections/2/delete/' }),
    contentOnly({ path: '/collections/add/' }),
    contentOnly({ path: '/redirects/' }),
    contentOnly({ path: '/redirects/?q=test' }),
    // TODO Missing existing redirect edit / delete views.
    contentOnly({ path: '/redirects/add/' }),
    contentOnly({ path: '/searchpicks/' }),
    contentOnly({ path: '/searchpicks/?q=test' }),
    // TODO Missing existing searchpick edit / delete views.
    contentOnly({ path: '/searchpicks/add/' }),
    contentOnly({
        path: '/searchpicks/add/',
        clickSelector: '#id_query_string-chooser',
    }),
];

const account = [
    contentOnly({ path: '/account/' }),
    contentOnly({ path: '/account/change_password/' }),
    contentOnly({ path: '/account/notification_preferences/' }),
    contentOnly({ path: '/account/language_preferences/' }),
];

const scenariosTodo = [
    // TODO Re-enable click-based script.
    // contentOnly(clickSelector('[href*="promote"]')({ path: '/pages/5/edit/#promote' })),
    // TODO Re-enable click-based script.
    // contentOnly(clickSelector('[href*="settings"]')({ path: '/pages/5/edit/#settings' })),
    // TODO Test date UI on settings tab.
    // TODO Re-enable click-based script.
    // contentOnly(clickSelector('[href*="privacy"]')({ path: '/pages/5/edit/#privacy' })),
    // TODO Only works well once every two clicks (toggle).
    // TODO Re-enable click-based script.
    // contentOnly(clickSelector('.dropdown-toggle')({ path: '/pages/5/edit/#dropdown-toggle', label: 'Page dropdown' })),
    // TODO Re-enable click-based script.
    // contentOnly(clickSelector('.page-chooser .chosen .action-choose')({ path: '/pages/5/edit/', label: 'Page chooser' })),
    // TODO Re-enable click-based script.
    // contentOnly(clickSelector('.document-chooser .unchosen .action-choose')({ path: '/pages/5/edit/', label: 'Document chooser' })),
    // // Does not work on my instance.
    // // contentOnly({ path: '/images/'}),
    // http://localhost:8000/admin/images/?collection_id=2
    contentOnly({ path: '/images/add/' }),
];

const scenarios = [
    ...base,
    ...nav,
    ...pages,
    ...modeladmin,
    ...images,
    ...documents,
    ...snippets,
    ...forms,
    ...settings,
    ...account,
];

module.exports = scenarios.map(generateScenario);
