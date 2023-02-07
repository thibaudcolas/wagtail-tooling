require("dotenv").config();
const baseConfig = require("../backstop/backstop.config");

process.setMaxListeners(0);

const WAGTAIL_SESSIONID = process.env.WAGTAIL_SESSIONID;

if (!WAGTAIL_SESSIONID) {
  throw new ReferenceError("WAGTAIL_SESSIONID is not defined.");
}

const tutorialScenarios = [
  {
    label: "tutorial_2",
    url: "http://localhost:8000/admin/",
  },
  {
    label: "tutorial_3",
    url: "http://localhost:8000/",
  },
  {
    label: "tutorial_4a",
    url: "http://localhost:8000/admin/pages/3/",
    hoverSelectors: ['[href="/admin/pages/5/add_subpage/"]'],
    highlightSelector: '[href="/admin/pages/5/add_subpage/"]',
  },
  {
    label: "tutorial_4b",
    url: "http://localhost:8000/admin/pages/5/add_subpage/",
    highlightSelector: '[href="/admin/pages/add/blog/blogpage/5/"]',
  },
  {
    label: "tutorial_5",
    url: "http://localhost:8000/admin/pages/6/edit/",
  },
  {
    label: "tutorial_7",
    url: "http://localhost:8000/our-blog/",
  },
  {
    label: "tutorial_6",
    url: "http://localhost:8000/our-blog/second-post/",
  },
  {
    label: "tutorial_8",
    url: "http://localhost:8000/admin/pages/7/edit/",
  },
  {
    label: "tutorial_9",
    url: "http://localhost:8000/tags/?tag=bread",
  },
  {
    label: "tutorial_10",
    url: "http://localhost:8000/our-blog/second-post/",
  },
];

const extendingAdminViews = [
  {
    label: "adminviews_calendar",
    url: "",
  },
  {
    label: "adminviews_calendar_template",
    url: "http://localhost:8000/admin/calendar/",
  },
  {
    label: "adminviews_calendarmonth",
    url: "http://localhost:8000/admin/calendar/month/",
    selectors: ["main"],
  },
  {
    label: "adminviews_menu",
    url: "http://localhost:8000/admin/calendar/",
    selectors: [".sidebar-main-menu"],
  },
  {
    label: "adminviews_menu_group_expanded",
    url: "http://localhost:8000/admin/calendar/",
    selectors: [".sidebar-panel"],
    clickSelectors: [
      ".sidebar-main-menu .sidebar-menu-item:nth-child(8) button",
    ],
  },
];

const guideScenarios = [
  { label: "screen01_login", url: "" },
  {
    label:
      'Wagtail dashboard with new "Things in Wagtail 4 have changed" banner',
    url: "http://localhost:8000/admin/",
  },
  {
    label:
      "Screenshot of Wagtail’s dashboard, with sidebar, header, summary metrics, and listing for pages in different states",
    url: "http://localhost:8000/admin/",
    // Higher to show whole contents.
    viewports: [{ label: "1280x1100", width: 1280, height: 1100 }],
  },
  {
    label:
      "Wagtail’s explorer menu, with 7 entries. There is a button with a left-pointing arrow to the top",
    url: "http://localhost:8000/admin/",
    clickSelectors: [
      ".sidebar-page-explorer-item button",
      '.c-page-explorer__item__action[href="/admin/pages/60/"]',
    ],
    viewports: [{ label: "1280x1100", width: 1280, height: 500 }],
    postInteractionWait: 1000,
    selectors: [".sidebar-panel"],
  },
  {
    label: "The page explorer, with the home page highlighted",
    url: "http://localhost:8000/admin/",
    clickSelectors: [".sidebar-page-explorer-item button"],
    highlightSelector: ".c-page-explorer__item:first-child",
    postInteractionWait: 1000,
    selectors: ["main"],
  },
  {
    label:
      'Search screen, with "bread" typed in focused field, and "There are 6 matching pages" underneath. The results show filters, and, sorting options, and four results rows are visible underneath',
    url: "http://localhost:8000/admin/pages/search/?q=bread",
    selectors: ["main"],
  },
  {
    label:
      "Listing of pages, with heading at the top and icon buttons. Underneath is a header row with a checkbox and column names, and then rows for different pages",
    url: "http://localhost:8000/admin/pages/60/",
    selectors: ["main"],
  },
  {
    label:
      'Close-up of the page’s breadcrumb, with icon buttons next to it. The breadcrumb reads: "Root > Welcome to the Wagtail bakery! > Breads',
    url: "http://localhost:8000/admin/pages/3/",
    hoverSelectors: ["[data-toggle-breadcrumbs]"],
    selectors: ["header"],
  },
  {
    label:
      'The page listing, with a "grip" control in the first column for each row, preceded by a "Sort" column label',
    url: "http://localhost:8000/admin/pages/3/?ordering=ord",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      'Breads page listing, with expanded "three dots" Actions menu in the header, showing 7 different page actions. One, "Add child page", is highlighted in red',
    url: "http://localhost:8000/admin/pages/3/",
    hoverSelectors: ['[data-hover-tooltip-content="Actions"]'],
    clickSelectors: ['[data-hover-tooltip-content="Actions"]'],
    delay: 3000,
    postInteractionWait: 5000,
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      'The page listing, with checkboxes in the first column, two of which are checked. At the bottom is an actions menu with different buttons and a "2 pages selected" label',
    url: "http://localhost:8000/admin/pages/3/",
    selectors: ["main"],
    hoverSelectors: [".bulk-action-checkbox-cell input"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    clickSelectors: [
      "tr:nth-child(2) .bulk-action-checkbox-cell input",
      "tr:nth-child(3) .bulk-action-checkbox-cell input",
    ],
  },
  {
    label:
      '"Create a page in Welcome to the Wagtail bakery!" page type list, with 7 different page types to choose from, with a link to pages using each type in each row',
    url: "http://localhost:8000/admin/pages/60/add_subpage/",
    selectors: ["main"],
  },
  {
    label:
      'Page editor titled "New: Standard page", showing the Content tab, with all fields empty',
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
  },
  // {
  //   label: "screen11.1_streamfield_richtext",
  //   url: "http://localhost:8000/admin/pages/76/edit/",
  //   typeSelectSelector: '[role="textbox"]',
  //   hoverSelectors: ['[name="header-three"]'],
  //   postInteractionWait: 1000,
  //   selectors: [".tab-content"],
  //   removeSelectors: [
  //     "footer",
  //     ".w-panel:not(#panel-child-content-body-section)",
  //   ],
  // },
  { label: "screen11.2_toolbar_tooltips", url: "" },
  { label: "screen11.3_keyboard_shortcuts_.gif", url: "" },
  {
    label: "screen11.8_adding_new_blocks",
    url: "http://localhost:8000/admin/pages/69/edit/",
    selectors: [".tab-content"],
    clickSelectors: [
      "[data-streamfield-stream-container] > div:nth-child(3) [data-streamblock-menu-open]",
    ],
    hoverSelectors: [
      "[data-streamfield-stream-container] > div:nth-child(3) [data-streamblock-menu-open]",
    ],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-body-section)",
    ],
    delay: 3000,
    postInteractionWait: 5000,
  },
  {
    label:
      "Close-up of a paragraph block, with block reodering, delete, duplicate controls visible to the right",
    url: "http://localhost:8000/admin/pages/69/edit/",
    selectors: ["[data-streamfield-stream-container]"],
    hoverSelectors: [".w-panel__controls-cue"],
    delay: 3000,
  },
  {
    label: "Page body field, with a grid of 6 blocks underneath",
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
    selectors: [".tab-content"],
    hoverSelectors: [".c-sf-add-button"],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-body-section)",
    ],
  },
  {
    label:
      "The page editing form, with its Info side panel opened to the right, with a highlight on page workflow metadata",
    url: "http://localhost:8000/admin/pages/61/edit/",
    selectors: ["main"],
    clickSelector: '[data-side-panel-toggle="status"]',
    highlightSelector:
      "#side-panel-status-title + div  > .w-py-6 > div:nth-child(2)",
    viewports: [{ label: "1280", width: 1280, height: 800 }],
  },
  {
    label:
      'Page history for "Breads and circuses", with a listing of actions, and a filtering form to the right',
    url: "http://localhost:8000/admin/pages/68/history/",
    selectors: ["main"],
  },
  {
    label: "page_history_replace_current_draft",
    url: "http://localhost:8000/admin/pages/68/revisions/7/revert/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "Listing of pages with highlight on the arrow of a child page, Blog when hovered over",
    url: "http://localhost:8000/admin/pages/60/",
    selectors: ["main"],
    highlightSelector: '[href="/admin/pages/61/"]',
  },
  {
    label:
      "Copy action available when hovering over a page in an explorer page",
    url: "http://localhost:8000/admin/pages/3/",
    selectors: ["main"],
    clickSelector: "[data-dropdown] a",
    highlightSelector: ".c-dropdown__item:nth-child(2)",
  },
  {
    label:
      "Copy page form with the options to change the title, slug, parent page, published status and option to create an alias",
    url: "http://localhost:8000/admin/pages/34/copy/",
    selectors: ["main"],
    keyPressSelectors: [
      {
        selector: "#id_new_title",
        keyPress: "New ",
      },
      {
        selector: "#id_new_slug",
        keyPress: "new-",
      },
    ],
  },
  {
    label:
      "Clicking the change button during the copy page form in order to change the parent of the copied page",
    url: "http://localhost:8000/admin/pages/34/copy/",
    selectors: ["main"],
    keyPressSelectors: [
      {
        selector: "#id_new_title",
        keyPress: "New ",
      },
      {
        selector: "#id_new_slug",
        keyPress: "new-",
      },
    ],
    highlightSelector: ".action-choose",
    hoverSelectors: [".action-choose"],
  },
  {
    label: "Clicking on the Copy this page button to confirm aliasing",
    url: "http://localhost:8000/admin/pages/34/copy/",
    selectors: ["main"],
    highlightSelector: "#id_alias",
    clickSelectors: ["#id_alias"],
  },
  {
    label: "screen12.7_3_alias_page_new_parent",
    url: "http://localhost:8000/admin/pages/3/",
    selectors: ["main"],
  },
  {
    label:
      "Editing an alias page notifies it is an alias and offers to either edit the original page or change the alias to an ordinary page",
    url: "http://localhost:8000/admin/pages/81/edit/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "Screenshot of the whole page editing screen in Wagtail, with sidebar, header, main form with page fields",
    url: "http://localhost:8000/admin/pages/68/edit/",
    readySelector: '.w-minimap [aria-current="true"]',
  },
  {
    label:
      "Page editor, with Save-Submit menu expanded to reveal all four options",
    url: "http://localhost:8000/admin/pages/76/edit/",
    clickSelector: "footer .dropdown-toggle",
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      'Page editor for "Bread and Circuses" page. The form to the left, and to the right the Preview side panel is expanded, showing the page as it would appear to users on Mobile devices',
    url: "http://localhost:8000/admin/pages/68/edit/",
    selectors: ["main"],
    clickSelector: '[data-side-panel-toggle="preview"]',
    delay: 1000,
  },
  {
    label:
      'Close-up of an empty Image field, showing its "Choose an image" button, and help text underneath',
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
    selectors: [".tab-content"],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-image-section)",
    ],
  },
  {
    label:
      '"Choose an image" modal dialog, with Search and Upload tabs, showing a grid of images underneath Search, Collection, Popular tags filters',
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
    readySelector: "#id_image-chooser .unchosen button",
    clickSelectors: ["#id_image-chooser .unchosen button"],
    postInteractionWait: 10000,
    // selectors: [".modal-content"],
  },
  { label: "screen17_upload_image", url: "" },
  { label: "screen18_image_format", url: "" },
  { label: "screen19_link_form", url: "" },
  {
    label:
      '"Insert embed" modal dialog, with a single URL field and an Insert button under',
    url: "",
  },
  {
    label:
      'Close-up of a rich text block, with a text paragraph, and then a thumbnail with a video "Play" symbol in the top right',
    url: "http://localhost:8000/admin/pages/68/edit/",
    readySelector: "[data-streamfield-stream-container]",
    selectors: ["[data-streamfield-stream-container]"],
  },
  // {
  //   label: "screen23_validation_error",
  //   url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
  //   clickSelector: "footer .action-save",
  //   selectors: ["main"],
  //   viewports: [{ label: "1280", width: 1280, height: 500 }],
  // },
  {
    label:
      "Authors block, with two Authors child items, each containing a People field. The first block’s controls to the right are highlighted in red",
    url: "http://localhost:8000/admin/pages/73/edit/",
    selectors: [".tab-content"],
    removeSelectors: [
      "footer",
      ".w-form-width > .w-panel:not(#panel-child-content-authors-section)",
    ],
    hoverSelectors: [
      "#inline_child_blog_person_relationship-0-panel-section button",
    ],
    highlightSelector:
      "#inline_child_blog_person_relationship-0-panel-section .w-panel__controls",
  },
  {
    label:
      'Promote tab of the page editor form, with three "For search engines" fields, and the "Show in menus" checkbox underneath',
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/#tab-promote",
    selectors: ["main"],
    removeSelectors: ["footer"],
  },
  { label: "screen26_reordering_multiple_items", url: "" },
  {
    label: "screen27_docs_icon",
    url: "http://localhost:8000/admin/pages/69/edit/",
    typeSelectSelector: '[role="textbox"]',
    highlightSelector: '[name="DOCUMENT"]',
    postInteractionWait: 1000,
    selectors: [".tab-content"],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-body-section)",
    ],
  },
  { label: "screen28_docs_form", url: "" },
  {
    label:
      'Documents listing, with four items, two of which are selected with their left-hand checkbox. Underneath, an action menu shows different actions and the text "2 documents selected',
    url: "http://localhost:8000/admin/documents/",
    selectors: ["main"],
    clickSelectors: [
      "tr:nth-child(2) .bulk-action-checkbox-cell input",
      "tr:nth-child(3) .bulk-action-checkbox-cell input",
    ],
  },
  {
    label:
      "Documents listing, with Search field in header, Add document button, and a Collections dropdown. Underneath, are 4 rows of documents with a header row above",
    url: "http://localhost:8000/admin/documents/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      'Document editing form for a "TPS Report Full Guidelines" Document. To the right we see the file size of 13.0 KB, and a "Usage Used 0 times" label',
    url: "http://localhost:8000/admin/documents/edit/4/",
    selectors: ["main"],
  },
  {
    label:
      'Images listing, with checkboxes shown next to images. Five images are selected, and a bottom menu shows different actions as well as a "5 images selected" label',
    url: "http://localhost:8000/admin/images/",
    selectors: ["main"],
    clickSelectors: [
      "li:nth-child(2) .bulk-action-checkbox",
      "li:nth-child(3) .bulk-action-checkbox",
      "li:nth-child(5) .bulk-action-checkbox",
      "li:nth-child(7) .bulk-action-checkbox",
      "li:nth-child(8) .bulk-action-checkbox",
    ],
  },
  {
    label: "Images listing, with header and images grid",
    url: "http://localhost:8000/admin/images/",
    selectors: ["main"],
  },
  {
    label:
      "Image editing form for Olivia Ava image. To the right of the form is an image preview, focal point controls, and metadata about the image",
    url: "http://localhost:8000/admin/images/52/",
    selectors: ["main"],
  },
  {
    label: "screen33_snippet_menu",
    url: "http://localhost:8000/admin/snippets/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      'Snippet editing form for a People snippet instance. To the right of the form is a "Usage Used n times" label',
    url: "http://localhost:8000/admin/snippets/base/people/edit/2/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    highlightSelector: '[href="/admin/snippets/base/people/usage/2/"]',
    clickSelector: '[data-side-panel-toggle="status"]',
  },
  { label: "collections_add_to_collection", url: "" },
  {
    label:
      "Form to create a collection, with a Name text field and Parent dropdown field",
    url: "http://localhost:8000/admin/collections/add/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "Screenshot of the Add Images page, with a drag-and-drop zone, with the Collection dropdown field highlighted in red",
    url: "http://localhost:8000/admin/images/multiple/add/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    highlightSelector: ".w-field",
  },
  {
    label:
      "Screenshot of the image editing form for an image titled Olivia Ava, with the Collection field highlighted in red",
    url: "http://localhost:8000/admin/images/52/",
    selectors: ["main"],
    highlightSelector: ".w-field--collection_choice_field",
  },
  {
    label:
      "Collections listing with three rows: Bakeries, BreadPage Images, Other",
    url: "http://localhost:8000/admin/collections/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      'The collection editing form for BreadPage Images, with a red highlight around the Privacy: "public" form control',
    url: "http://localhost:8000/admin/collections/4/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    highlightSelector: '[data-a11y-dialog-show="set-privacy"]',
  },
  {
    label: "collections_privacy_overlay",
    url: "http://localhost:8000/admin/collections/4/",
    selectors: [".w-dialog__box"],
    clickSelectors: ['[data-a11y-dialog-show="set-privacy"]'],
  },
  {
    label:
      'The users’ listing, with checkboxes in the first column. The checkbox for the "Admin user" row has been checked, and a footer with different actions shows at the bottom of the screen',
    url: "http://localhost:8000/admin/users/",
    selectors: ["main"],
    clickSelectors: ["tr:nth-child(2) .bulk-action-checkbox-cell input"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "The users’ listing, with search and a CTA to add users. This shows three rows with users Olivia Ava, Admin User, and Muddy Waters",
    url: "http://localhost:8000/admin/users/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "Popular search terms modal dialog, with close button, search fields, and a table showing multiple terms with their respective Views",
    url: "http://localhost:8000/admin/searchpicks/4/",
    clickSelectors: ["#id_query_string-chooser"],
    postInteractionWait: 5000,
    selectors: [".modal-content"],
  },
  {
    label:
      'Promoted results listing, with search field, "Add" button, and four results listed under as rows',
    url: "http://localhost:8000/admin/searchpicks/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "Promoted result editing form, with search term field and associated pages",
    url: "http://localhost:8000/admin/searchpicks/4/",
    selectors: ["main"],
  },
  { label: "screen40_table_block", url: "" },
  {
    label:
      "Redirects listing, with a search field in the header, buttons to add and import redirects, and rows of existing underneath",
    url: "http://localhost:8000/admin/redirects/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "Editing form for a redirect, with from fields, Site field, permanent checkbox, and destination fields for page and URL options",
    url: "http://localhost:8000/admin/redirects/1/",
    selectors: ["main"],
  },
  {
    label:
      "Screenshot of the workflow editing interface, with fields to change the workflow name, tasks, and assigned pages",
    url: "http://localhost:8000/admin/workflows/edit/1/",
    selectors: ["main"],
  },
  {
    label:
      'Listing of workflows, with a single "Moderators approval" workflow shown, that has a single step',
    url: "http://localhost:8000/admin/workflows/list/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    hoverSelectors: ["[data-wagtail-tooltip]"],
  },
  {
    label: "Tasks listing, with a single item",
    url: "http://localhost:8000/admin/workflows/tasks/index/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label:
      "Tasks creation form, with Name field and Groups checkboxes, with two Moderators and Editors options",
    url: "http://localhost:8000/admin/workflows/tasks/add/wagtailcore/groupapprovaltask/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },

  // {
  //   label: "screen48_comment_thread",
  //   url: "http://localhost:8000/admin/pages/68/edit/",
  //   selectors: [".tab-content"],
  //   clickSelectors: [
  //     '[data-side-panel-toggle="comments"]',
  //     '[data-comment-id="1"]',
  //   ],
  //   viewports: [{ label: "1280", width: 1280, height: 500 }],
  //   highlightSelector: "[data-comment-notifications]",
  //   removeSelectors: [
  //     "footer",
  //     ".w-form-width > .w-panel:not(#panel-child-content-introduction-section)",
  //   ],
  // },
  {
    label:
      "Screenshot of a Subtitle form field with a comment button next to it, highlighted in red",
    url: "http://localhost:8000/admin/pages/68/edit/",
    selectors: ["main"],
    clickSelectors: ['[data-side-panel-toggle="comments"]', "#id_subtitle"],
    removeSelectors: [
      "footer",
      ".w-form-width > .w-panel:not(#panel-child-content-subtitle-section)",
    ],
    hoverSelectors: ["#id_subtitle"],
    highlightSelector: "#id_subtitle + [data-comment-add]",
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  { label: "screen50_comment_menu", url: "" },
  { label: "screen51_draftail_comment", url: "" },
  { label: "screen52_new_comment", url: "" },
  {
    label:
      "Wide screenshot of the page editor’s tabs and the comment notifications switch off to the right",
    url: "http://localhost:8000/admin/pages/68/edit/",
    selectors: ["main"],
    clickSelector: '[data-side-panel-toggle="comments"]',
    selectors: [".w-tabs__wrapper"],
  },
  {
    label:
      'Page editor for "Breads and Circuses" blog page, with the minimap opened to the right, showing the form sections',
    url: "http://localhost:8000/admin/pages/68/edit/",
    readySelector: '.w-minimap [aria-current="true"]',
    hoverSelectors: [".w-minimap__toggle"],
  },
];

const releasesScenarios = [
  {
    label:
      'Page editor for "Breads and Circuses" blog page, with the minimap opened to the right, showing the form sections',
    url: "http://localhost:8000/admin/pages/68/edit/",
    readySelector: '.w-minimap [aria-current="true"]',
    hoverSelectors: [".w-minimap__toggle"],
  },
];

const scenarios = [
  // ...tutorialScenarios,
  // ...extendingAdminViews,
  // ...guideScenarios,
  // ...releasesScenarios,
  // {
  //   label:
  //     'Page editor for "Breads and Circuses" blog page, with the minimap opened to the right, showing the form sections',
  //   url: "http://localhost:8001/admin/pages/73/edit/",
  //   clickSelectors: ["#id_blog_person_relationship-OPEN_MODAL"],
  //   // readySelector: "#chooser-modal-select-1",
  //   selectors: [".modal-content"],
  // },
];

// const FILTER = /.*rich.*/;
const FILTER = null;

const testScenarios = scenarios
  .map((s) => ({
    sessionid: s.unauthenticated ? "invalid" : WAGTAIL_SESSIONID,
    ...s,
  }))
  .filter((s) => Boolean(s.url))
  .filter((s) => !Boolean(s.skip))
  .filter((s) => (FILTER ? s.label.match(FILTER) : true));

const scenarioLabels = testScenarios.map((s) => s.label);
const duplicateScenarioLabels = scenarioLabels.filter(
  (l, i) => scenarioLabels.indexOf(l) !== i,
);

if (duplicateScenarioLabels.length !== 0) {
  console.log(duplicateScenarioLabels);
  throw new Error("Two scenarios cannot use the same label");
}

module.exports = {
  debug: false,
  debugWindow: false,
  id: "docs",
  viewports: [
    {
      label: "1280x800",
      width: 1280,
      height: 800,
    },
  ],
  fileNameTemplate: "{scenarioLabel}",
  scenarios: testScenarios,
  onBeforeScript: "puppeteer/onBefore.js",
  onReadyScript: "puppeteer/onReady.js",
  paths: {
    ...baseConfig.paths,
    bitmaps_reference: `${__dirname}/data/bitmaps_reference`,
    bitmaps_test: `${__dirname}/data/bitmaps_test`,
    html_report: `${__dirname}/data/html_report`,
    ci_report: `${__dirname}/data/ci_report`,
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
};
