require("dotenv").config();

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
    url: "http://localhost:8000/admin/calendar/",
  },
  { label: "adminviews_calendar_template", url: "" },
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
  // { label: "adminviews_menu_group", url: "" },
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
  // { label: "screen01_login", url: "" },
  {
    label: "screen02_dashboard_editor",
    url: "http://localhost:8000/admin/",
    // Higher to show whole contents.
    viewports: [{ label: "1280x1100", width: 1280, height: 1100 }],
  },
  {
    label: "screen03_explorer_menu",
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
    label: "screen04_search_screen",
    url: "http://localhost:8000/admin/pages/search/?q=bread",
    selectors: ["main"],
  },
  {
    label: "screen05_explorer_page",
    url: "http://localhost:8000/admin/pages/60/",
    selectors: ["main"],
  },
  // { label: "screen06_explorer_page_arrow", url: "" },
  {
    label: "screen07_explorer_page_breadcrumb",
    url: "http://localhost:8000/admin/pages/3/",
    hoverSelectors: ["[data-toggle-breadcrumbs]"],
    selectors: ["header"],
  },
  {
    label: "screen08.5_reorder_page_handles",
    url: "http://localhost:8000/admin/pages/3/?ordering=ord",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  // { label: "screen08_add_page_button", url: "" },
  {
    label: "screen09.1_page_more_dropdown",
    url: "http://localhost:8000/admin/pages/3/",
    hoverSelectors: ['[data-hover-tooltip-content="Actions"]'],
    clickSelectors: ['[data-hover-tooltip-content="Actions"]'],
    highlightSelector:
      '[data-hover-tooltip-content="Actions"], [href="/admin/pages/3/add_subpage/"]',
    postInteractionWait: 1000,
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen09.2_bulk_action_checkboxes",
    url: "http://localhost:8000/admin/pages/3/",
    selectors: ["main"],
    hoverSelectors: [".bulk-action-checkbox-cell input"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    clickSelectors: [
      "tr:nth-child(2) .bulk-action-checkbox-cell input",
      "tr:nth-child(3) .bulk-action-checkbox-cell input",
    ],
  },
  // { label: "screen09.3_bulk_action_bar", url: "" },
  {
    label: "screen09_page_type_selection",
    url: "http://localhost:8000/admin/pages/60/add_subpage/",
    selectors: ["main"],
  },
  {
    label: "screen10_blank_page_edit_screen",
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
  },
  {
    label: "screen11.1_streamfield_richtext",
    url: "http://localhost:8000/admin/pages/76/edit/",
    typeSelectSelector: '[role="textbox"]',
    hoverSelectors: ['[name="header-three"]'],
    postInteractionWait: 1000,
    selectors: ["#tab-content"],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-body-section)",
    ],
  },
  // { label: "screen11.2_toolbar_tooltips", url: "", },
  // { label: "screen11.3_keyboard_shortcuts_.gif", url: "" },
  {
    label: "screen11.8_adding_new_blocks",
    url: "http://localhost:8000/admin/pages/69/edit/",
    selectors: ["#tab-content"],
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
    postInteractionWait: 1000,
  },
  {
    label: "screen11.9_streamfield_reordering",
    url: "http://localhost:8000/admin/pages/69/edit/",
    selectors: [".c-sf-container__block-container"],
    hoverSelectors: [".c-sf-block__actions__cue"],
  },
  {
    label: "screen11_empty_streamfield",
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
    selectors: ["#tab-content"],
    hoverSelectors: [".c-sf-add-button"],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-body-section)",
    ],
  },
  {
    label: "screen12.5_edit_screen_in_moderation",
    url: "http://localhost:8000/admin/pages/61/edit/",
    selectors: ["main"],
    clickSelector: '[data-side-panel-toggle="status"]',
    highlightSelector:
      "#side-panel-status-title + div  > .w-py-6 > div:nth-child(2)",
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen12.6_1_copy_from_explorer_menu",
    url: "http://localhost:8000/admin/pages/3/",
    selectors: ["main"],
    clickSelector: "[data-dropdown] a",
    highlightSelector: ".c-dropdown__item:nth-child(2)",
  },
  {
    label: "screen12.6_2_copy_input_information",
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
  // { label: "screen12.6_3_copy_success", url: "" },
  {
    label: "screen12.7_1_alias_choose_parent_page_button",
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
  // { label: "screen12.7_2_alias_choose_new_parent_page", url: "" },
  {
    label: "screen12.7_3_alias_confirm_changes",
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
    label: "screen12.7_4_alias_page_edit_notification",
    url: "http://localhost:8000/admin/pages/81/edit/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen12_edit_screen_overview",
    url: "http://localhost:8000/admin/pages/68/edit/",
  },
  {
    label: "screen13_publish_menu",
    url: "http://localhost:8000/admin/pages/76/edit/",
    clickSelector: "footer .dropdown-toggle",
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen13_preview_panel",
    url: "http://localhost:8000/admin/pages/68/edit/",
    selectors: ["main"],
    clickSelector: '[data-side-panel-toggle="preview"]',
    delay: 1000,
  },
  {
    label: "screen14_add_main_image",
    url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
    selectors: ["#tab-content"],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-image-section)",
    ],
  },
  // { label: "screen15_carousel_form", url: "" },
  // Not working for some reason.
  // {
  //   label: "screen16_selecting_image_from_library",
  //   url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
  //   readySelector: "#id_image-chooser .unchosen button",
  //   clickSelectors: ["#id_image-chooser .unchosen button"],
  //   postInteractionWait: 10000,
  //   // selectors: [".modal-content"],
  // },
  // { label: "screen17_upload_image", url: "" },
  // { label: "screen18_image_format", url: "" },
  // { label: "screen19_link_form", url: "" },
  // { label: "screen20_insert_video_form", url: "" },
  {
    label: "screen21_video_in_editor",
    url: "http://localhost:8000/admin/pages/68/edit/",
    readySelector: ".c-sf-block__content-inner",
    selectors: [".c-sf-block__content-inner"],
  },
  // { label: "screen22_required_field", url: "" },
  // {
  //   label: "screen23_validation_error",
  //   url: "http://localhost:8000/admin/pages/add/base/standardpage/60/",
  //   clickSelector: "footer .action-save",
  //   selectors: ["main"],
  //   viewports: [{ label: "1280", width: 1280, height: 500 }],
  // },
  // { label: "screen24_multiple_items_closed", url: "" },
  {
    label: "screen25_multiple_items_open",
    url: "http://localhost:8000/admin/pages/73/edit/",
    selectors: ["#tab-content"],
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
    label: "screen26.5_promote_tab",
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
    selectors: ["#tab-content"],
    removeSelectors: [
      "footer",
      ".w-panel:not(#panel-child-content-body-section)",
    ],
  },
  // { label: "screen28_docs_form", url: "" },
  {
    label: "screen29.5_documents_bulk_actions",
    url: "http://localhost:8000/admin/documents/",
    selectors: ["main"],
    clickSelectors: [
      "tr:nth-child(2) .bulk-action-checkbox-cell input",
      "tr:nth-child(3) .bulk-action-checkbox-cell input",
    ],
  },
  {
    label: "screen29_documents_page",
    url: "http://localhost:8000/admin/documents/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen30_documents_edit_page",
    url: "http://localhost:8000/admin/documents/edit/4/",
    selectors: ["main"],
  },
  {
    label: "screen31.5_images_bulk_actions",
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
    label: "screen31_images_page",
    url: "http://localhost:8000/admin/images/",
    selectors: ["main"],
  },
  {
    label: "screen32_image_edit_page",
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
    label: "screen34_snippet_used_times",
    url: "http://localhost:8000/admin/snippets/base/people/edit/2/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    highlightSelector: '[href="/admin/snippets/base/people/usage/2/"]',
  },
  // { label: "collections_add_to_collection", url: "" },
  {
    label: "collections_create_collection",
    url: "http://localhost:8000/admin/collections/add/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "collections_create_collection_upload_images",
    url: "http://localhost:8000/admin/images/multiple/add/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    highlightSelector: ".w-field",
  },
  {
    label: "collections_edit_img_view",
    url: "http://localhost:8000/admin/images/52/",
    selectors: ["main"],
    highlightSelector: ".w-field--collection_choice_field",
  },
  {
    label: "collections_list",
    url: "http://localhost:8000/admin/collections/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "collections_privacy_button",
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

  // { label: "screen35_users_menu_item", url: "" },
  {
    label: "screen36.5_users_bulk_actions",
    url: "http://localhost:8000/admin/users/",
    selectors: ["main"],
    clickSelectors: ["tr:nth-child(2) .bulk-action-checkbox-cell input"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen36_users_interface",
    url: "http://localhost:8000/admin/users/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  // { label: "screen37_promoted_menu_item", url: "" },
  {
    label: "screen38.5_popular_search_results",
    url: "http://localhost:8000/admin/searchpicks/4/",
    clickSelectors: ["#id_query_string-chooser"],
    postInteractionWait: 5000,
    selectors: [".modal-content"],
  },
  {
    label: "screen38_promoted_results_listing",
    url: "http://localhost:8000/admin/searchpicks/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen39_add_promoted_result",
    url: "http://localhost:8000/admin/searchpicks/4/",
    selectors: ["main"],
  },
  // { label: "screen40_table_block", url: "" },
  // { label: "screen41_redirects_menu_item", url: "" },
  {
    label: "screen42_redirects_interface",
    url: "http://localhost:8000/admin/redirects/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen43_redirects_edit_redirect",
    url: "http://localhost:8000/admin/redirects/1/",
    selectors: ["main"],
  },
  {
    label: "screen44_workflow_edit",
    url: "http://localhost:8000/admin/workflows/edit/1/",
    selectors: ["main"],
  },
  {
    label: "screen45_workflow_index",
    url: "http://localhost:8000/admin/workflows/list/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    hoverSelectors: ["[data-wagtail-tooltip]"],
  },
  {
    label: "screen46_task_index",
    url: "http://localhost:8000/admin/workflows/tasks/index/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },
  {
    label: "screen47_task_create",
    url: "http://localhost:8000/admin/workflows/tasks/add/wagtailcore/groupapprovaltask/",
    selectors: ["main"],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
  },

  {
    label: "screen48_comment_thread",
    url: "http://localhost:8000/admin/pages/68/edit/",
    selectors: ["#tab-content"],
    clickSelectors: [
      '[data-side-panel-toggle="comments"]',
      '[data-comment-id="1"]',
    ],
    viewports: [{ label: "1280", width: 1280, height: 500 }],
    highlightSelector: "[data-comment-notifications]",
    removeSelectors: [
      "footer",
      ".w-form-width > .w-panel:not(#panel-child-content-introduction-section)",
    ],
  },
  {
    label: "screen49_new_comment_icon",
    url: "http://localhost:8000/admin/pages/68/edit/",
    selectors: ["main"],
    clickSelectors: ['[data-side-panel-toggle="comments"]', "#id_subtitle"],
    removeSelectors: [
      "footer",
      ".w-form-width > .w-panel:not(#panel-child-content-subtitle-section)",
    ],
    hoverSelectors: ["#id_subtitle"],
    highlightSelector: "#id_subtitle + [data-comment-add]",
  },
  // { label: "screen50_comment_menu", url: "" },
  // { label: "screen51_draftail_comment", url: "" },
  // { label: "screen52_new_comment", url: "" },
  {
    label: "screen53_commenting_notifications",
    url: "http://localhost:8000/admin/pages/68/edit/",
    selectors: ["main"],
    clickSelector: '[data-side-panel-toggle="comments"]',
    selectors: [".w-tabs__wrapper"],
  },
];

const scenarios = [
  // ...tutorialScenarios,
  // ...extendingAdminViews,
  // ...guideScenarios,
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
    bitmaps_reference: "backstop/data/bitmaps_reference",
    bitmaps_test: "backstop/data/bitmaps_test",
    engine_scripts: "backstop/engine_scripts",
    html_report: "backstop/data/html_report",
    ci_report: "backstop/data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
};
