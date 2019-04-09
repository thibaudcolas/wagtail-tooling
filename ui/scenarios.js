const PAGE_ID = 60;

const contentOnly = (val) => val;

const dashboard = [
  {
    label: "Dashboard",
    path: "/",
    category: "Dashboard",
    selectors: [".nav-wrapper", ".content-wrapper"],
    states: [
      // TODO Implement these or convert to another format. Needs fixtures.
      "Wagtail upgrade",
      "Most recent edits",
      "Pages awaiting moderation",
    ],
  },
];

const auth = [
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
    path: "/logout",
    category: "Auth",
    notes: "“You have been successfully logged out.” message on Login screen",
    skip: "Revokes the session cookie, which is annoying when testing.",
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

const navigation = [
  {
    label: "Search form",
    path: "/",
    category: "Navigation",
  },
  {
    label: "Account menu",
    path: "/",
    category: "Navigation",
    selectors: [".nav-wrapper"],
    clickSelector: "#account-settings",
  },
  {
    label: "Settings menu",
    path: "/",
    category: "Navigation",
    clickSelector: ".submenu-trigger.icon-cogs",
  },
  {
    label: "ModelAdmin menu",
    path: "/",
    category: "Navigation",
    clickSelector: ".submenu-trigger.icon-fa-cutlery",
  },
  {
    label: "Pages menu",
    path: "/",
    category: "Navigation",
    clickSelector: "[data-explorer-menu-item] > a",
    states: ["Loading", "Server error"],
  },
  {
    label: "Pages menu level 2",
    path: "/",
    category: "Navigation",
    clickSelector: [
      "[data-explorer-menu-item] > a",
      ".c-explorer__item__action:last-of-type",
    ],
    onReadySelector: ".c-explorer__item:nth-child(2)",
    states: ["Loading", "Server error"],
  },
  {
    label: "Mobile menu toggle",
    path: "/",
    category: "Navigation",
    // TODO
    skip: "Needs to configure the viewport",
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
    onBeforeScript: "disableJS.js",
    notes:
      "“Javascript is required to use Wagtail, but it is currently disabled.” banner at the top of all pages",
    skip: "No way to disable JavaScript with Chromy at the moment.",
  },
  { label: "404", path: "/404", category: "Navigation" },
  {
    label: "403",
    path: "/",
    category: "Navigation",
    notes:
      "“Sorry, you do not have permission to access this area.” message at the top of the dasboard",
    skip: "Needs to use an account that is not admin",
  },
];

const pages = [
  contentOnly({
    label: "View child pages",
    path: `/pages/${PAGE_ID}/`,
    category: "Pages",
    states: [
      "Empty",
      "Reorder child pages",
      "Sort by <column>",
      "Pagination",
      "Root level",
    ],
  }),
  contentOnly({
    label: "Search",
    path: "/pages/search/?q=bread",
    category: "Pages",
    states: [
      "No results",
      "Page type filter",
      "Sort by <column>",
      "Pagination",
    ],
  }),
  contentOnly({
    label: "Set privacy",
    path: `/pages/${PAGE_ID}/`,
    category: "Pages",
    states: ["Validation error"],
    // TODO Privacy type select not working.
    // clickSelector: ['.action-set-privacy', '[for="id_restriction_type_2"]'],
    clickSelector: [".action-set-privacy"],
  }),
  contentOnly({
    label: "View all revisions",
    path: `/pages/${PAGE_ID}/revisions/`,
    category: "Pages",
    states: ["Sort by <column>", "Pagination"],
  }),
  contentOnly({
    label: "Compare revisions",
    path: `/pages/${PAGE_ID}/revisions/compare/32...34/`,
    category: "Pages",
    states: ["Empty"],
  }),
  contentOnly({
    label: "Preview revision",
    path: `/pages/${PAGE_ID}/revisions/37/view/`,
    category: "Pages",
    notes:
      "This serves the same view as the “live” page, but with different content. This should at least change the page title to make it clear it's a revision",
  }),
  contentOnly({
    label: "Review revision",
    path: `/pages/${PAGE_ID}/revisions/37/revert/`,
    category: "Pages",
    states: ["Success"],
    notes:
      "Uses the standard page editing UI, but with a top banner and different footer",
  }),
  contentOnly({
    label: "Unpublish",
    path: `/pages/${PAGE_ID}/unpublish/`,
    category: "Pages",
    states: ["Success"],
  }),
  contentOnly({
    label: "Delete",
    path: `/pages/${PAGE_ID}/delete/`,
    category: "Pages",
    states: ["Success"],
  }),
  contentOnly({
    label: "Copy",
    path: `/pages/${PAGE_ID}/copy/`,
    category: "Pages",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Move",
    path: `/pages/69/move/60/`,
    category: "Pages",
    states: ["Pagination", "No move target", "Confirm", "Success"],
  }),
  contentOnly({
    label: "Edit lock",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Pages",
    states: ["Locked", "Unlocked"],
    skip: "To implement",
  }),
  contentOnly({
    label: "Add child page",
    path: `/pages/${PAGE_ID}/add_subpage/`,
    category: "Pages",
  }),
  contentOnly({
    label: "Create",
    path: `/pages/add/base/homepage/60/`,
    category: "Pages",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Edit",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Pages",
  }),
  contentOnly({
    label: "Edit promote tab",
    path: `/pages/${PAGE_ID}/edit/#tab-promote`,
    category: "Pages",
    clickSelector: '[href="#tab-promote"]',
  }),
  contentOnly({
    label: "Edit settings tab",
    path: `/pages/${PAGE_ID}/edit/#tab-settings`,
    category: "Pages",
    // TODO Point to a specific, stable date.
    // clickSelector: ['[href="#tab-settings"]', '[for="id_go_live_at"]'],
    clickSelector: ['[href="#tab-settings"]'],
  }),
  {
    label: "Preview",
    path: `/pages/${PAGE_ID}/edit/preview/`,
    category: "Pages",
    notes:
      "This serves the same view as the “live” page, but with different content. This should at least change the page title to make it clear it's a revision",
  },
];

const richtext = [
  {
    label: "Text formats",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Rich text",
    states: [
      "Bold",
      "Italic",
      "Heading levels",
      "Bullet list",
      "Numbered list",
    ],
  },
  {
    label: "Blocks",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Rich text",
    states: ["Horizontal rule", "Embed", "Image", "Blocks tooltip"],
  },
  {
    label: "Inlines",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Rich text",
    states: ["Links", "Documents", "Inlines tooltip"],
  },
  {
    label: "Other controls",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Rich text",
    states: ["Line break", "Undo", "Redo"],
  },
];

const choosers = [
  contentOnly({
    label: "Image chooser",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: ["Loading", "Pagination", "Collections filter", "Search"],
    typeSelector: '[for="id_promo_text"] + div .richtext',
    clickSelector: '[title="Images"]',
    onReadySelector: '[action="/admin/images/chooser/?select_format=true"]',
    hideSelectors: [".show-transparency"],
  }),
  contentOnly({
    label: "Images chooser upload",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: ["Uploading", "Validation error"],
    clickSelector: [
      "#id_image-chooser li:nth-child(2) button",
      '[href="#upload"]',
    ],
    skip: "TODO Does not seem to work for the second selector?",
  }),
  contentOnly({
    label: "Embed chooser",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: ["Loading", "Validation error", "Uploading"],
    typeSelector: '[for="id_promo_text"] + div .richtext',
    clickSelector: '[title="Embed"]',
    onReadySelector: '[action="/admin/embeds/chooser/upload/"]',
  }),
  contentOnly({
    label: "Document chooser",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: ["Loading", "Pagination", "Collections filter", "Search"],
    typeSelector: '[for="id_promo_text"] + div .richtext',
    clickSelector: '[title="Documents"]',
    onReadySelector: '[action="/admin/documents/chooser/"]',
  }),
  contentOnly({
    label: "Link chooser",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: [
      "Loading",
      "Pagination",
      "Search",
      "Explorer navigation",
      "Preselected page",
    ],
    typeSelector: '[for="id_promo_text"] + div .richtext',
    clickSelector: '[title="Add/Edit Link"]',
    onReadySelector: ".page-results",
  }),
  // contentOnly({
  //   label: "Link chooser preselected page",
  //   path: `/pages/${PAGE_ID}/edit/`,
  //   clickSelector: [
  //     "#id_hero_cta_link-chooser li:nth-child(2) button",
  //     '[href="/admin/choose-page/3/?page_type=wagtailcore.page"]',
  //   ],
  //   onReadySelector: ".page-results",
  // }),
  {
    label: "Link chooser – external link",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: ["Validation error"],
    typeSelector: '[for="id_promo_text"] + div .richtext',
    clickSelector: [
      '[title="Add/Edit Link"]',
      '[href*="/admin/choose-external-link/"]',
    ],
    skip: "TODO Investigate",
  },
  {
    label: "Email link chooser",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: ["Validation error"],
    typeSelector: '[for="id_promo_text"] + div .richtext',
    clickSelector: [
      '[title="Add/Edit Link"]',
      '[href*="/admin/choose-email-link/"]',
    ],
    skip: "TODO Investigate",
  },
  contentOnly({
    label: "Page chooser",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "Choosers",
    states: [
      "Loading",
      "Pagination",
      "Search",
      "Explorer navigation",
      "Preselected page",
    ],
    skip: "Not implemented",
  }),
];

const streamfield = [
  {
    label: "StreamField",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "StreamField",
    notes: "Left out",
    skip: "Left out",
  },
  {
    label: "TableBlock",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "StreamField",
    notes: "Left out",
    skip: "Left out",
  },
];

const inlinepanel = [
  {
    label: "InlinePanel",
    path: `/pages/${PAGE_ID}/edit/`,
    category: "InlinePanel",
    states: ["Add", "Move", "Delete"],
  },
];

const modeladmin = [
  contentOnly({
    label: "View all",
    path: "/base/people/",
    category: "ModelAdmin",
    states: ["Empty", "Pagination", "Sort by <column>"],
  }),
  contentOnly({
    label: "Edit",
    path: "/base/people/edit/1/",
    category: "ModelAdmin",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add",
    path: "/base/people/create/",
    category: "ModelAdmin",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Delete",
    path: "/base/people/delete/1/",
    category: "ModelAdmin",
    states: ["Success"],
  }),
];

const images = [
  contentOnly({
    label: "View all",
    path: "/images/",
    category: "Images",
    states: ["Empty", "Pagination"],
    hideSelectors: [".show-transparency"],
  }),
  contentOnly({
    label: "Search",
    path: "/images/?q=bread",
    category: "Images",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
    label: "Collections filter",
    path: "/images/?collection_id=2",
    category: "Images",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
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
  contentOnly({
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
  contentOnly({
    label: "Delete",
    path: "/images/47/delete/",
    category: "Images",
    states: ["Success"],
  }),
  contentOnly({
    label: "Image URL generator",
    path: "/images/47/generate_url/",
    category: "Images",
  }),
];

// wagtailmedia
const media = [
  {
    label: "View all",
    path: "/media/",
    category: "Media",
    states: ["Empty", "Pagination", "Sort by <column>"],
  },
  contentOnly({
    label: "Search",
    path: "/media/?q=bread",
    category: "Media",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
    label: "Edit",
    path: "/media/edit/1/",
    category: "Media",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add audio",
    path: "/media/audio/add/",
    category: "Media",
    states: ["Validation error", "Uploading", "Success"],
  }),
  contentOnly({
    label: "Add video",
    path: "/media/video/add/",
    category: "Media",
    states: ["Validation error", "Uploading", "Success"],
  }),
  contentOnly({
    label: "Delete",
    path: "/images/delete/1/",
    category: "Media",
    states: ["Success"],
  }),
];

const documents = [
  contentOnly({
    label: "View all",
    path: "/documents/",
    category: "Documents",
    states: ["Empty", "Pagination", "Sort by <column>"],
  }),
  contentOnly({
    label: "Search",
    path: "/documents/?q=wagtail",
    category: "Documents",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
    label: "Collections filter",
    path: "/documents/?collection_id=2",
    category: "Documents",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
    label: "Edit",
    path: "/documents/edit/1/",
    category: "Documents",
    states: ["File not found error on load", "Validation error", "Success"],
  }),
  contentOnly({
    label: "Add a document",
    path: "/documents/multiple/add/",
    category: "Documents",
    states: ["Loading", "Validation error", "Success"],
  }),
  contentOnly({
    label: "Delete",
    path: "/documents/delete/1/",
    category: "Documents",
    states: ["Success"],
  }),
];

const snippets = [
  contentOnly({
    label: "View all types",
    path: "/snippets/",
    category: "Snippets",
    states: ["Empty"],
  }),
  contentOnly({
    label: "View all",
    path: "/snippets/base/people/",
    category: "Snippets",
    states: ["Empty", "Pagination", "Delete selected"],
  }),
  contentOnly({
    label: "Search snippets",
    path: "/snippets/base/people/?q=test",
    category: "Snippets",
    states: ["No results"],
  }),

  contentOnly({
    label: "Edit",
    path: "/snippets/base/people/1/",
    category: "Snippets",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add",
    path: "/snippets/base/people/add/",
    category: "Snippets",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Delete",
    path: "/snippets/base/people/1/delete/",
    category: "Snippets",
    states: ["Success"],
  }),
];

const forms = [
  contentOnly({
    label: "View all",
    path: "/forms/",
    category: "Forms",
    states: ["Empty", "Pagination"],
  }),
  contentOnly({
    label: "View submissions",
    path: "/forms/submissions/69/",
    category: "Forms",
    states: ["Sort by <column>", "Delete selected"],
  }),
  contentOnly({
    label: "Submissions date picker",
    path: "/forms/submissions/69/",
    category: "Forms",
    clickSelector: '[for="id_date_to"]',
    skip: "Point to a specific, stable date.",
  }),
  contentOnly({
    label: "Submissions date range",
    path:
      "/forms/submissions/69/?date_from=2017-01-01&date_to=2050-01-01&action=filter",
    category: "Forms",
    states: ["No results"],
    clickSelector: [
      '[for="id_date_to"]',
      '[data-date="9"][data-month="0"][data-year="2050"]',
    ],
  }),
  contentOnly({
    label: "Submissions CSV download",
    path: "/forms/submissions/69/",
    category: "Forms",
  }),
];

const userSettings = [
  contentOnly({
    label: "View all",
    path: "/users/",
    category: "Users",
    states: ["Sort by <column>", "Pagination"],
  }),
  contentOnly({
    label: "Search",
    path: "/users/?q=admin",
    category: "Users",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
    label: "Edit",
    path: "/users/3/",
    category: "Users",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Edit roles",
    path: "/users/3/#roles",
    category: "Users",
    clickSelector: ['[href*="roles"]', '[for="id_groups_1"]'],
  }),
  contentOnly({
    label: "Add",
    path: "/users/add/",
    category: "Users",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add roles",
    path: "/users/add/#roles",
    category: "Users",
    clickSelector: ['[href*="roles"]', '[for="id_groups_1"]'],
  }),
  contentOnly({
    label: "Delete",
    path: "/users/4/delete/",
    category: "Users",
    states: ["Success"],
  }),
];

const groupSettings = [
  contentOnly({
    label: "View all",
    path: "/groups/",
    category: "Groups",
    states: ["Empty", "Pagination"],
  }),
  contentOnly({
    label: "Search",
    path: "/groups/?q=edi",
    category: "Groups",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
    label: "Edit",
    path: "/groups/1/",
    category: "Groups",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add a group",
    path: "/groups/new/",
    category: "Groups",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add permissions",
    path: "/groups/1/",
    category: "Groups",
    clickSelector: [
      "#id_page_permissions-ADD",
      "#id_document_permissions-ADD",
      "#id_image_permissions-ADD",
    ],
  }),
  contentOnly({
    label: "Delete permissions",
    path: "/groups/1/",
    category: "Groups",
    clickSelector: [
      "#id_page_permissions-0-DELETE-button",
      "#id_document_permissions-0-DELETE-button",
      "#id_image_permissions-0-DELETE-button",
    ],
  }),
  contentOnly({
    label: "Delete",
    path: "/groups/1/delete/",
    category: "Groups",
    states: ["Success"],
  }),
];

const siteSettings = [
  contentOnly({
    label: "View all",
    path: "/sites/",
    category: "Sites",
    states: ["Sort by <column>"],
  }),
  contentOnly({
    label: "Edit",
    path: "/sites/2/",
    category: "Sites",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add a site",
    path: "/sites/new/",
    category: "Sites",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Delete",
    path: "/sites/2/delete/",
    category: "Sites",
    states: ["Success"],
  }),
];

const collectionSettings = [
  contentOnly({
    label: "View all",
    path: "/collections/",
    category: "Collections",
    states: ["Empty"],
  }),
  contentOnly({
    label: "Edit",
    path: "/collections/2/",
    category: "Collections",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Set privacy",
    path: "/collections/2/",
    category: "Collections",
    states: ["Validation error", "Success"],
    // TODO Privacy type click not always working
    // clickSelector: ['.action-set-privacy', '[for="id_restriction_type_3"]'],
    clickSelector: [".action-set-privacy"],
  }),
  contentOnly({
    label: "Add a collection",
    path: "/collections/add/",
    category: "Collections",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Delete",
    path: "/collections/2/delete/",
    category: "Collections",
    states: ["Success"],
  }),
];

const redirectsSettings = [
  contentOnly({
    label: "View all",
    path: "/redirects/",
    category: "Redirects",
    states: ["Empty", "Sort by <column>", "Pagination"],
  }),
  contentOnly({
    label: "Search",
    path: "/redirects/?q=test",
    category: "Redirects",
    states: ["No results", "Pagination"],
  }),
  // TODO Missing existing redirect edit / delete views.
  contentOnly({
    label: "Edit",
    path: "/redirects/1/",
    category: "Redirects",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add",
    path: "/redirects/add/",
    category: "Redirects",
  }),
  contentOnly({
    label: "Add / edit pages chooser",
    path: "/redirects/add/",
    category: "Redirects",
    states: ["Loading", "Search", "Search no results", "Explorer navigation"],
  }),
];

const promotedSearchSettings = [
  contentOnly({
    label: "View all",
    path: "/searchpicks/",
    category: "Promoted search",
    states: ["Empty", "Pagination"],
  }),
  contentOnly({
    label: "Search",
    path: "/searchpicks/?q=test",
    category: "Promoted search",
    states: ["No results", "Pagination"],
  }),
  contentOnly({
    label: "Edit",
    path: "/searchpicks/5/",
    category: "Promoted search",
    states: ["Validation error", "Success"],
  }),
  contentOnly({
    label: "Add / Edit search term chooser",
    path: "/searchpicks/5/",
    category: "Promoted search",
    states: ["Loading", "Search", "Search no results", "Pagination"],
  }),
  contentOnly({
    label: "Add / edit pages chooser",
    path: "/searchpicks/5/",
    category: "Redirects",
    states: ["Loading", "Search", "Search no results", "Explorer navigation"],
  }),
  contentOnly({
    label: "Add results",
    path: "/searchpicks/add/",
    category: "Promoted search",
    states: ["Validation error", "Success"],
    clickSelector: "#id_query_string-chooser",
    onReadySelector: '[action="/admin/search/queries/chooser/results/"]',
  }),
  contentOnly({
    label: "Delete",
    path: "/searchpicks/5/delete/",
    category: "Promoted search",
    states: ["Success"],
  }),
];

const styleguide = [
  contentOnly({
    label: "Styleguide",
    path: "/styleguide/",
    category: "Styleguide",
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
  ...userSettings,
  ...groupSettings,
  ...siteSettings,
  ...collectionSettings,
  ...redirectsSettings,
  ...promotedSearchSettings,
  ...styleguide,
  ...settingsContrib,
];

const account = [
  contentOnly({
    label: "Account actions",
    path: "/account/",
    category: "User account",
  }),
  contentOnly({
    label: "Change profile picture",
    path: "/account/change_avatar/",
    category: "User account",
    states: [
      {
        label: "Validation error",
        actions: [
          'click element [action="/admin/account/change_avatar/"] button',
        ],
      },
    ],
  }),
  contentOnly({
    label: "Change email",
    path: "/account/change_email/",
    category: "User account",
    states: [
      {
        label: "Validation error",
        actions: [
          "set field #id_email to invalid@mail",
          'click element [value="Change email"]',
          "wait for element .error-message to be visible",
        ],
      },
      {
        label: "Success",
        actions: [
          'click element [value="Change email"]',
          "wait for element .success to be visible",
        ],
      },
    ],
  }),
  contentOnly({
    label: "Change password",
    path: "/account/change_password/",
    category: "User account",
    states: [
      {
        label: "Validation error",
        actions: [
          'click element [action="/admin/account/change_password/"] [type="submit"]',
          "wait for element .error-message to be visible",
        ],
      },
      {
        label: "Success",
        path: "/account/change_password/",
        actions: [
          "set field #id_old_password to changeme",
          "set field #id_new_password1 to changeme",
          "set field #id_new_password2 to changeme",
          'click element [action="/admin/account/change_password/"] [type="submit"]',
          "wait for element .success to be visible",
        ],
        // TODO Skip.
        skip: "Resets the sessionid cookie, makes the remaining tests break",
      },
    ],
  }),
  contentOnly({
    label: "Notification preferences",
    path: "/account/notification_preferences/",
    category: "User account",
    states: [
      {
        label: "Success",
        actions: [
          'click element [value="Update"]',
          "wait for element .success to be visible",
        ],
      },
    ],
  }),
  contentOnly({
    label: "Language preferences",
    path: "/account/language_preferences/",
    category: "User account",
    states: [
      {
        label: "Success",
        actions: [
          'click element [value="Update"]',
          "wait for element .success to be visible",
        ],
      },
    ],
  }),
  contentOnly({
    label: "Current time zone",
    path: "/account/current_time_zone/",
    category: "User account",
    states: [
      {
        label: "Success",
        actions: [
          'click element [value="Update"]',
          "wait for element .success to be visible",
        ],
      },
    ],
  }),
];

const scenarios = [
  ...dashboard,
  ...auth,
  ...navigation,
  ...pages,
  ...richtext,
  ...choosers,
  ...streamfield,
  ...inlinepanel,
  ...modeladmin,
  ...images,
  ...media,
  ...documents,
  ...snippets,
  ...forms,
  ...settings,
  ...account,
];

module.exports = scenarios;
