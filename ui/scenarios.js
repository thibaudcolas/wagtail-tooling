const {
  wagtailUpgradeAvailable,
  adminAPIFailure,
  adminAPISlow,
} = require("../backstop/engine_scripts/puppeteer/requestOverrides");

const BAKERYDEMO_HOMEPAGE_ID = 60;
const BAKERYDEMO_EMPTY_BLOG_PAGE_ID = 80;
const BAKERYDEMO_REVISIONS_PAGE_ID = 80;

const PAGE_ID = BAKERYDEMO_HOMEPAGE_ID;

const TEST_ORIGIN = "http://localhost:8000" || process.TEST_ORIGIN;

const generateLabels = (scenario, index) => {
  let fullLabel = scenario.path;

  if (scenario.typeSelector) {
    if (Array.isArray(scenario.typeSelector)) {
      fullLabel += ` ${scenario.typeSelector.join(", ")}`;
    } else {
      fullLabel += ` ${scenario.typeSelector}`;
    }
  }

  if (scenario.clickSelector) {
    if (Array.isArray(scenario.clickSelector)) {
      fullLabel += ` ${scenario.clickSelector.join(", ")}`;
    } else {
      fullLabel += ` ${scenario.clickSelector}`;
    }
  }

  if (!fullLabel) {
    throw scenario;
  }

  const label = fullLabel.substring(0, 100);

  return {
    index,
    label: `${scenario.label} ${scenario.path}`,
    fullLabel,
  };
};

const generateScenario = (scenario, index) => ({
  url: scenario.url ?? `${TEST_ORIGIN}/admin${scenario.path}`,
  referenceUrl: "",
  readyEvent: "",
  readySelector: "",
  delay: 0,
  hideSelectors: [],
  removeSelectors: [],
  hoverSelector: "",
  clickSelector: "",
  postInteractionWait: 0,
  selectors: [],
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 0.1,
  requireSameDimensions: true,
  ...scenario,
  ...generateLabels(scenario, index),
});

const composeScenario = (...args) => Object.assign({}, ...args);
const main = composeScenario.bind(null, { selectors: ["main"] });

const base = [
  {
    label: "Dashboard",
    path: "/",
    category: "Dashboard",
    selectors: [".sidebar", "main"],
    // requestOverrides: wagtailUpgradeAvailable,
    states: [
      "Wagtail upgrade",
      "Most recent edits",
      "Pages awaiting moderation",
    ],
    fixturesRequirements: ["Most recent edits", "Pages awaiting moderation"],
  },
  {
    label: "Edit bird",
    path: "/edit-bird",
    category: "Navigation",
    states: ["Active"],
    skip: "No way to access the edit bird from the admin?",
  },
  {
    label: "No JS",
    path: "/",
    category: "Navigation",
    disableJS: true,
    notes:
      "“JavaScript is required to use Wagtail, but it is currently disabled.” banner at the top of all pages",
    skip: "This would be possible with page.setJavaScriptEnabled(false), but is not supported by pa11y atm.",
  },
  {
    label: "Unauthorized access (403)",
    path: "/users/3/delete/",
    category: "Navigation",
    notes:
      "“Sorry, you do not have permission to access this area.” message at the top of the dashboard",
    actions: ["wait for element .error to be visible"],
  },
];

const nav = [
  {
    label: "Sub-menu",
    path: "/",
    category: "Navigation",
    skip: "Needs troubleshooting",
    clickSelector: ".sidebar-sub-menu-item [aria-haspopup='menu']",
  },
  {
    label: "Pages explorer",
    path: "/",
    category: "Navigation",
    skip: "Needs troubleshooting",
    clickSelector: '.sidebar-page-explorer-item [aria-haspopup="dialog"]',
    states: [
      {
        label: "Loading",
        actions: [
          'click element a.sidebar-menu-item__link[aria-haspopup="dialog"]',
          "wait for element .sidebar-panel--open to be visible",
        ],
        requestOverrides: adminAPISlow,
      },
      {
        label: "Server error",
        actions: [
          'click element a.sidebar-menu-item__link[aria-haspopup="dialog"]',
          "wait for element .sidebar-panel--open to be visible",
        ],
        requestOverrides: adminAPIFailure,
      },
    ],
  },
  {
    label: "Pages explorer, level 2",
    path: "/",
    category: "Navigation",
    skip: "Needs troubleshooting",
    clickSelector: [
      '.sidebar-page-explorer-item [aria-haspopup="dialog"]',
      ".c-page-explorer__item__action:last-of-type",
    ],
    onReadySelector: ".c-page-explorer__item:nth-child(2)",
  },
];

const pages = [
  main({
    label: "Add child page",
    path: "/pages/1/add_subpage/",
    category: "Pages",
  }),
  main({
    label: "Page type usage",
    path: "/pages/usage/base/standardpage/",
    category: "Pages",
  }),
  main({
    label: "Move - Start",
    path: `/pages/80/move/${BAKERYDEMO_HOMEPAGE_ID}/`,
    category: "Pages",
  }),
  main({
    label: "Move - Pagination",
    path: `/pages/80/move/999/`,
    category: "Pages",
    skip: "Missing fixtures",
  }),
  main({
    label: "Move - No move target",
    path: `/pages/80/move/61/`,
    category: "Pages",
  }),
  main({
    label: "Move - Confirm",
    path: `/pages/80/move/76/confirm/`,
    category: "Pages",
  }),
  main({
    label: "Move - Success",
    path: `/pages/80/move/76/confirm/`,
    category: "Pages",
    skip: "TODO troubleshoot CSRF issue.",
  }),
  main({
    label: "Copy",
    path: "/pages/80/copy/",
    category: "Pages",
    states: [
      {
        label: "Validation error",
        actions: [
          'click element [value="Copy this page"]',
          "wait for element .error-message to be visible",
        ],
        skip: "TODO troubleshoot CSRF issue.",
      },
      {
        label: "Success",
        actions: [],
        skip: "TODO troubleshoot CSRF issue.",
      },
    ],
  }),
  main({
    label: "Delete",
    path: "/pages/80/delete/",
    category: "Pages",
    states: [
      {
        label: "Success",
        actions: [
          'click element [value="Yes, delete it"]',
          "wait for element .success to be visible",
        ],
        skip: "TODO troubleshoot CSRF issue. And do we really want to delete a page?",
      },
    ],
  }),
  main({
    label: "Unpublish",
    path: `/pages/${BAKERYDEMO_EMPTY_BLOG_PAGE_ID}/unpublish/`,
    category: "Pages",
    states: [
      {
        label: "Success",
        actions: [
          'click element [value="Yes, unpublish it"]',
          "wait for element .success to be visible",
        ],
        skip: "TODO troubleshoot CSRF issue",
      },
    ],
    fixturesRequirements: ["Empty blog index page"],
  }),
  main({
    label: "View all revisions",
    path: `/pages/${BAKERYDEMO_REVISIONS_PAGE_ID}/history/`,
    category: "Pages",
    states: [
      {
        label: "Sort by <column>",
        path: `/pages/${BAKERYDEMO_REVISIONS_PAGE_ID}/history/?ordering=created_at`,
      },
      {
        label: "Pagination",
        skip: "Not implemented",
      },
    ],
  }),
  main({
    label: "Compare revisions",
    path: `/pages/${BAKERYDEMO_REVISIONS_PAGE_ID}/revisions/compare/7...68/`,
    category: "Pages",
  }),
  main({
    label: "Review revision",
    path: `/pages/${BAKERYDEMO_REVISIONS_PAGE_ID}/revisions/68/revert/`,
    category: "Pages",
    states: [
      {
        label: "Success",
        actions: [
          "click element .action-save",
          "wait for element .success to be visible",
        ],
        skip: "TODO troubleshoot CSRF issue",
      },
    ],
    notes:
      "Uses the standard page editing UI, but with a top banner and different footer",
  }),
  main({
    label: "Create",
    path: "/pages/add/base/homepage/60/",
    category: "Pages",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Edit",
    path: "/pages/60/edit/",
    category: "Pages",
    states: ["Validation error", "Success", "Locked"],
  }),
  main({
    label: "Edit promote tab",
    path: "/pages/60/edit/#tab-promote",
    category: "Pages",
    states: ["Validation error", "Success", "Locked"],
  }),
  main({
    label: "Edit settings tab",
    path: "/pages/60/edit/#tab-settings",
    category: "Pages",
    states: ["Validation error", "Success", "Locked"],
  }),
  {
    label: "Preview",
    path: `/pages/${PAGE_ID}/edit/preview/`,
    category: "Pages",
    notes:
      "This serves the same view as the “live” page, but with different content. This should at least change the page title to make it clear it's a revision",
    skip: "Not reviewable automatically",
  },
  main({
    label: "Explorer - Bulk move",
    path: "/bulk/wagtailcore/page/move/?id=109&id=108&id=107&id=100&id=93&id=81",
    category: "Pages",
  }),
  main({
    label: "Explorer - Bulk delete",
    path: "/bulk/wagtailcore/page/delete/?id=109&id=108&id=107&id=100&id=93&id=81",
    category: "Pages",
  }),
  main({
    label: "Explorer - Bulk publish",
    path: "/bulk/wagtailcore/page/publish/?id=109&id=108&id=107&id=100&id=93&id=81",
    category: "Pages",
  }),
  main({
    label: "Explorer - Bulk unpublish",
    path: "/bulk/wagtailcore/page/unpublish/?id=61&id=3&id=76&id=63&id=70&id=69",
    category: "Pages",
  }),
  main({
    label: "Explorer - View child pages",
    path: `/pages/${PAGE_ID}/`,
    category: "Pages",
  }),
  main({
    label: "Explorer - View child pages - Set privacy",
    path: `/pages/${PAGE_ID}/`,
    category: "Pages",
    clickSelector: "[data-action-set-privacy]",
    actions: [
      "click element .action-set-privacy",
      "wait for element .modal-body to be visible",
    ],
    states: [
      {
        label: "Validation error",
        actions: [
          "click element .action-set-privacy",
          "wait for element .modal-body to be visible",
          "click element #id_restriction_type_2",
          'click element [value="Save"]',
          "wait for element .error-message to be visible",
        ],
        skip: "Privacy type select not working",
      },
    ],
  }),
  main({
    label: "Explorer - Empty",
    path: `/pages/${BAKERYDEMO_EMPTY_BLOG_PAGE_ID}/`,
    fixturesRequirements: [
      `Empty blog index page id=${BAKERYDEMO_EMPTY_BLOG_PAGE_ID}`,
    ],
    category: "Pages",
  }),
  main({
    label: "Explorer - Reorder child pages",
    path: `/pages/${PAGE_ID}/?ordering=ord`,
    category: "Pages",
  }),
  main({
    label: "Explorer - Reorder success",
    path: `/pages/${PAGE_ID}/`,
    skip: "Impossible to reach without drag'n'drop",
    category: "Pages",
  }),
  main({
    label: "Explorer - Sort by <column>",
    path: `/pages/${PAGE_ID}/?ordering=title`,
    category: "Pages",
  }),
  main({
    label: "Explorer - Pagination",
    path: `/pages/999/`,
    skip: "Missing fixtures",
    fixturesRequirements: [
      `Paginated breads index page id=999`,
      "51 bread pages under paginated breads index page",
    ],
    category: "Pages",
  }),
  main({
    label: "Explorer - Root level",
    path: "/pages/",
    category: "Pages",
  }),
  main({
    label: "Search",
    path: "/pages/search/",
    category: "Pages",
  }),
  main({
    label: "Search - No results",
    path: "/pages/search/?q=pain",
    category: "Pages",
  }),
  main({
    label: "Search - Page type filter",
    path: "/pages/search/?q=bread&content_type=blog.blogpage",
    category: "Pages",
  }),
  main({
    label: "Search - Sort by <column>",
    path: "/pages/search/?ordering=title&q=bread",
    category: "Pages",
  }),
  main({
    label: "Search - Pagination",
    path: "/pages/search/?q=b",
    category: "Pages",
  }),
];

const modeladmin = [
  main({
    label: "View all",
    path: "/base/people/",
    category: "ModelAdmin",
    states: ["Empty", "Pagination", "Sort by <column>"],
  }),
  main({
    label: "Edit",
    path: "/base/people/edit/1/",
    category: "ModelAdmin",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "History",
    path: "/base/people/history/1/",
    category: "ModelAdmin",
  }),
  main({
    label: "Add",
    path: "/base/people/create/",
    category: "ModelAdmin",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Delete",
    path: "/base/people/delete/1/",
    category: "ModelAdmin",
    states: ["Success"],
  }),
];

const images = [
  main({
    label: "View all",
    path: "/images/",
    category: "Images",
    states: ["Empty", "Pagination"],
    hideSelectors: [".show-transparency"],
  }),
  main({
    label: "Search",
    path: "/images/?q=bread",
    category: "Images",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Collections filter",
    path: "/images/?collection_id=2",
    category: "Images",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Edit",
    path: "/images/47/",
    category: "Images",
    states: [
      "File not found error on load",
      "Validation error",
      "Focal point set",
      "Success",
    ],
  }),
  main({
    label: "Add an image",
    path: "/images/add/",
    category: "Images",
    states: [
      "File not found error on load",
      "Validation error",
      "Focal point set",
      "Success",
    ],
  }),
  main({
    label: "Add multiple images",
    path: "/images/multiple/add/",
    category: "Images",
    states: [
      "File not found error on load",
      "Validation error",
      "Focal point set",
      "Success",
    ],
  }),
  main({
    label: "Delete",
    path: "/images/43/delete/",
    category: "Images",
    states: ["Success"],
  }),
  main({
    label: "Image URL generator",
    path: "/images/43/generate_url/",
    category: "Images",
    states: ["Focal point set"],
  }),
  main({
    label: "Bulk add tags",
    path: "/bulk/wagtailimages/image/add_tags/?p=3&id=52&id=53",
    category: "Images",
  }),
  main({
    label: "Bulk add to collection",
    path: "/bulk/wagtailimages/image/add_to_collection/?p=3&id=53",
    category: "Images",
  }),
  main({
    label: "Bulk add delete",
    path: "/bulk/wagtailimages/image/delete/?p=3&id=52",
    category: "Images",
  }),
];

const documents = [
  main({
    label: "View all",
    path: "/documents/",
    category: "Documents",
    states: ["Empty", "Pagination", "Sort by <column>"],
  }),
  main({
    label: "Search",
    path: "/documents/?q=zoo",
    category: "Documents",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Collections filter",
    path: "/documents/?collection_id=2",
    category: "Documents",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Edit",
    path: "/documents/edit/1/",
    category: "Documents",
    states: ["File not found error on load", "Validation error", "Success"],
  }),
  main({
    label: "Add a document",
    path: "/documents/add/",
    category: "Documents",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add multiple documents",
    path: "/documents/multiple/add/",
    category: "Documents",
    states: ["Loading", "Validation error", "Success"],
  }),
  main({
    label: "Delete",
    path: "/documents/delete/1/",
    category: "Documents",
    states: ["Success"],
  }),
];

const snippets = [
  main({
    label: "View all types",
    path: "/snippets/",
    category: "Snippets",
    states: ["Empty"],
  }),
  main({
    label: "View all",
    path: "/snippets/base/people/",
    category: "Snippets",
    states: ["Empty", "Pagination", "Delete selected"],
  }),
  main({
    label: "Search snippets",
    path: "/snippets/base/people/?q=test",
    category: "Snippets",
    states: ["No results"],
  }),

  main({
    label: "Edit",
    path: "/snippets/base/people/1/",
    category: "Snippets",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add",
    path: "/snippets/base/people/add/",
    category: "Snippets",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Delete",
    path: "/snippets/base/people/1/delete/",
    category: "Snippets",
    states: ["Success"],
  }),
  main({
    label: "Bulk delete",
    path: "/snippets/breads/breadingredient/multiple/delete/?id=1&id=2&id=3&id=4&id=5",
    category: "Snippets",
    states: ["Success"],
  }),
];

const forms = [
  main({
    label: "View all",
    path: "/forms/",
    category: "Forms",
    states: ["Empty", "Pagination"],
  }),
  main({
    label: "View submissions",
    path: "/forms/submissions/69/",
    category: "Forms",
    states: ["Sort by <column>", "Delete selected"],
    skip: "Needs troubleshooting",
  }),
  main({
    label: "Submissions date picker",
    path: "/forms/submissions/69/",
    category: "Forms",
    clickSelector: '[for="id_date_to"]',
    skip: "Point to a specific, stable date.",
  }),
  main({
    label: "Submissions date range",
    path: "/forms/submissions/69/?date_from=2017-01-01&date_to=2050-01-01&action=filter",
    category: "Forms",
    states: ["No results"],
    skip: "Needs troubleshooting",
    clickSelector: [
      '[for="id_date_to"]',
      '[data-date="9"][data-month="0"][data-year="2050"]',
    ],
  }),
];

const reports = [
  main({
    label: "Locked Pages",
    path: "/reports/locked/",
    category: "reports",
    states: ["Empty", "Pagination", "Filtered"],
  }),
  main({
    label: "Workflows",
    path: "/reports/workflow/",
    category: "reports",
    states: ["Empty", "Pagination", "Filtered"],
  }),
  main({
    label: "Workflow tasks",
    path: "/reports/workflow_tasks/",
    category: "reports",
    states: ["Empty", "Pagination", "Filtered"],
  }),
  main({
    label: "Site history",
    path: "/reports/site-history/",
    category: "reports",
    states: ["Empty", "Pagination", "Filtered"],
  }),
  main({
    label: "Aging pages",
    path: "/reports/aging-pages/",
    category: "reports",
    states: ["Empty", "Pagination", "Filtered"],
  }),
];

const workflows = [
  main({
    label: "View all",
    path: "/workflows/list/",
    category: "Workflows",
    states: ["Empty", "Pagination"],
  }),
  main({
    label: "Add",
    path: "/workflows/add/",
    category: "Workflows",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Usage",
    path: "/workflows/usage/1/",
    category: "Workflows",
    states: ["Empty", "Pagination"],
  }),
  main({
    label: "Edit",
    path: "/workflows/edit/1/",
    category: "Workflows",
    states: ["Validation error", "Success"],
  }),
];

const workflowTasks = [
  main({
    label: "View all",
    path: "/workflows/tasks/index/",
    category: "Workflow tasks",
    states: ["Empty", "Pagination"],
  }),
  main({
    label: "Add",
    path: "/workflows/tasks/add/wagtailcore/groupapprovaltask/",
    category: "Workflow tasks",
  }),
  main({
    label: "Edit",
    path: "/workflows/tasks/edit/1/",
    category: "Workflow tasks",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Disable",
    path: "/workflows/tasks/disable/1/",
    category: "Workflow tasks",
    states: ["Success"],
  }),
];

const users = [
  main({
    label: "View all",
    path: "/users/",
    category: "Users",
    states: ["Sort by <column>", "Pagination"],
  }),
  main({
    label: "Search",
    path: "/users/?q=admin",
    category: "Users",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Edit",
    path: "/users/3/",
    category: "Users",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Edit roles",
    path: "/users/3/#tab-roles",
    category: "Users",
  }),
  main({
    label: "Add",
    path: "/users/add/",
    category: "Users",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add roles",
    path: "/users/add/#tab-roles",
    category: "Users",
  }),
  main({
    label: "Delete",
    path: "/users/4/delete/",
    category: "Users",
    states: ["Success"],
  }),
  main({
    label: "Bulk delete",
    path: "/bulk/auth/user/delete/?next=%2Fadmin%2Fusers%2F&id=4",
    category: "Users",
    states: ["Success"],
  }),
];

const groups = [
  main({
    label: "View all",
    path: "/groups/",
    category: "Groups",
    states: ["Empty", "Pagination"],
  }),
  main({
    label: "Search",
    path: "/groups/?q=edi",
    category: "Groups",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Edit",
    path: "/groups/1/",
    category: "Groups",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add a group",
    path: "/groups/new/",
    category: "Groups",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add permissions",
    path: "/groups/1/",
    category: "Groups",
    clickSelector: [
      "#id_page_permissions-ADD",
      "#id_document_permissions-ADD",
      "#id_image_permissions-ADD",
    ],
  }),
  main({
    label: "Delete permissions",
    path: "/groups/1/",
    category: "Groups",
    clickSelector: [
      "#id_page_permissions-0-DELETE-button",
      "#id_document_permissions-0-DELETE-button",
      "#id_image_permissions-0-DELETE-button",
    ],
    skip: "Needs troubleshooting",
  }),
  main({
    label: "Delete",
    path: "/groups/1/delete/",
    category: "Groups",
    states: ["Success"],
  }),
  main({
    label: "Group users",
    path: "/groups/2/users/",
    category: "Groups",
    states: ["Empty", "Sort by <column>", "Pagination"],
  }),
];

const sites = [
  main({
    label: "View all",
    path: "/sites/",
    category: "Sites",
    states: ["Sort by <column>"],
  }),
  main({
    label: "Edit",
    path: "/sites/2/",
    category: "Sites",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add a site",
    path: "/sites/new/",
    category: "Sites",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Delete",
    path: "/sites/2/delete/",
    category: "Sites",
    states: ["Success"],
  }),
];

const locales = [
  main({
    label: "View all",
    path: "/locales/",
    category: "Locales",
    states: ["Sort by <column>"],
  }),
  main({
    label: "Edit",
    path: "/locales/2/",
    category: "Locales",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add a locale",
    path: "/locales/new/",
    category: "Locales",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Delete",
    path: "/locales/2/delete/",
    category: "Locales",
    states: ["Success"],
  }),
];

const collections = [
  main({
    label: "View all",
    path: "/collections/",
    category: "Collections",
    states: ["Empty"],
  }),
  main({
    label: "Edit",
    path: "/collections/2/",
    category: "Collections",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Set privacy",
    path: "/collections/2/",
    category: "Collections",
    states: ["Validation error", "Success"],
    clickSelector: ["[data-action-set-privacy]"],
  }),
  main({
    label: "Add a collection",
    path: "/collections/add/",
    category: "Collections",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Delete (disallowed)",
    path: "/collections/2/delete/",
    category: "Collections",
    states: ["Success"],
  }),
  main({
    label: "Delete (allowed)",
    path: "/collections/5/delete/",
    category: "Collections",
    states: ["Success"],
  }),
];

const redirects = [
  main({
    label: "View all",
    path: "/redirects/",
    category: "Redirects",
    states: ["Empty", "Sort by <column>", "Pagination"],
  }),
  main({
    label: "Search",
    path: "/redirects/?q=test",
    category: "Redirects",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Import redirects",
    path: "/redirects/import/",
    category: "Redirects",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add",
    path: "/redirects/add/",
    category: "Redirects",
  }),
  main({
    label: "Add / edit pages chooser",
    path: "/redirects/add/",
    category: "Redirects",
    states: ["Loading", "Search", "Search no results", "Explorer navigation"],
  }),
  main({
    label: "Export Redirects",
    path: "/redirects/report",
    category: "Redirects",
    states: ["Empty", "Sort by <column>", "Pagination", "Filtered"],
  }),
  main({
    label: "Edit",
    path: "/redirects/1/",
    category: "Redirects",
    states: ["Validation error", "Success"],
  }),
  main({ path: "/redirects/1/delete/" }),
];

const promotedSearchResults = [
  main({
    label: "View all",
    path: "/searchpicks/",
    category: "Promoted search",
    states: ["Empty", "Pagination"],
  }),
  main({
    label: "Search",
    path: "/searchpicks/?q=bread",
    category: "Promoted search",
    states: ["No results", "Pagination"],
  }),
  main({
    label: "Edit",
    path: "/searchpicks/4/",
    category: "Promoted search",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Add / Edit search term chooser",
    path: "/searchpicks/4/",
    category: "Promoted search",
    states: ["Loading", "Search", "Search no results", "Pagination"],
  }),
  main({
    label: "Add / edit pages chooser",
    path: "/searchpicks/4/",
    category: "Promoted search",
    states: ["Loading", "Search", "Search no results", "Explorer navigation"],
  }),
  main({
    label: "Add results",
    path: "/searchpicks/add/",
    category: "Promoted search",
    states: ["Validation error", "Success"],
    clickSelector: "#id_query_string-chooser",
    onReadySelector: '[action="/admin/search/queries/chooser/results/"]',
  }),
  main({
    label: "Delete",
    path: "/searchpicks/4/delete/",
    category: "Promoted search",
    states: ["Success"],
  }),
];

const account = [
  main({
    label: "Account profile",
    path: "/account/",
    category: "User account",
    states: ["Validation error", "Success"],
  }),
  main({
    label: "Account notifications",
    path: "/account/#tab-notifications",
    category: "User account",
    states: ["Validation error", "Success"],
  }),
];

const styleguide = [
  main({
    label: "Styleguide",
    path: "/styleguide/",
    category: "Styleguide",
    viewports: [
      {
        label: "Full",
        width: 1024,
        height: 15000,
      },
    ],
  }),
];

const settingsContrib = [
  {
    label: "Site settings",
    path: "/",
    category: "Site settings",
    skip: "Left out for now",
  },
];

const settings = [
  ...reports,
  ...workflows,
  ...workflowTasks,
  ...users,
  ...groups,
  ...sites,
  ...locales,
  ...collections,
  ...redirects,
  ...promotedSearchResults,
  ...account,
  ...settingsContrib,
];

const other = [
  { label: "404", path: "/404/", category: "Other" },
  {
    label: "Login",
    path: "/login/?next=/admin/login",
    category: "Auth",
    unauthenticated: true,
    states: [
      {
        label: "Validation error",
        actions: [
          'click element [type="submit"]',
          "wait for element .error to be visible",
        ],
      },
    ],
  },
  {
    label: "Logout",
    path: "/login/?next=/admin/logout/",
    category: "Auth",
    notes: "“You have been successfully logged out.” message on Login screen",
    skip: "Revokes the session cookie, which is annoying when testing.",
    actions: [
      "set field #id_username to admin",
      "set field #id_password to changeme",
      'click element [type="submit"]',
      "wait for element .success to be visible",
    ],
  },
  {
    label: "Password reset",
    path: "/password_reset/",
    category: "Auth",
    unauthenticated: true,
    states: [
      {
        label: "Validation error",
        actions: [
          'click element [type="submit"]',
          "wait for element .error to be visible",
        ],
      },
    ],
  },
  {
    label: "Password reset done",
    path: "/password_reset/done/",
    category: "Auth",
    unauthenticated: true,
  },
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
  ...styleguide,
  ...other,
];

module.exports = scenarios.map(generateScenario);
