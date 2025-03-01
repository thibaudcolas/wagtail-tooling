import {
  createPlaywrightRouter,
  PlaywrightCrawler,
  Dataset,
  EnqueueStrategy,
} from "crawlee";

const TEST_ORIGIN = process.env.TEST_ORIGIN || "http://localhost:8000";
const startUrls = [
  "/",
  "/admin/",
  "/admin/pages/1/add_subpage/",
  "/admin/pages/usage/base/standardpage/",
  "/admin/pages/82/move/",
  "/admin/pages/82/copy/",
  "/admin/pages/82/unpublish/",
  "/admin/pages/82/history/",
  "/admin/pages/82/revisions/compare/60...110/",
  "/admin/pages/60/edit/",
  "/admin/pages/60/",
  "/admin/pages/search/",
  "/admin/snippets/",
  "/admin/snippets/base/person/",
  "/admin/snippets/base/person/edit/1/",
  "/admin/snippets/base/person/history/1/",
  "/admin/images/",
  "/admin/images/47/",
  "/admin/images/multiple/add/",
  "/admin/images/43/generate_url/",
  "/admin/bulk/wagtailimages/image/add_tags/?p=3&id=52&id=53",
  "/admin/bulk/wagtailimages/image/add_to_collection/?p=3&id=53",
  "/admin/documents/",
  "/admin/documents/edit/1/",
  "/admin/documents/multiple/add/",
  "/admin/forms/",
  "/admin/forms/submissions/69/",
  "/admin/reports/locked/",
  "/admin/reports/workflow/",
  "/admin/reports/workflow_tasks/",
  "/admin/reports/site-history/",
  "/admin/reports/aging-pages/",
  "/admin/workflows/list/",
  "/admin/users/",
  "/admin/groups/",
  "/admin/sites/",
  "/admin/locales/",
  "/admin/collections/",
  "/admin/redirects/",
  "/admin/searchpicks/",
  "/admin/searchpicks/4/",
  "/admin/searchpicks/add/",
  "/admin/404/",
].map((path) => `${TEST_ORIGIN}${path}`);

console.log(TEST_ORIGIN);

const router = createPlaywrightRouter();
const dataset = await Dataset.open("csp-scanner");

router.addDefaultHandler(async ({ enqueueLinks, log, page }) => {
  await enqueueLinks({
    // strategy: EnqueueStrategy.SameDomain,
    globs: [`${TEST_ORIGIN}/**`],
    label: "detail",
  });
});

router.addHandler("detail", async ({ request, page, log, pushData }) => {
  const title = await page.title();
  log.info(`${title}`, { url: request.loadedUrl });
});

const crawler = new PlaywrightCrawler({
  requestHandler: router,
  // Comment this option to scrape the full website.
  maxRequestsPerCrawl: 2000,
  preNavigationHooks: [
    async ({ page, request }) => {
      await page.setExtraHTTPHeaders({
        "X-Auto-Login": "admin",
      });

      page.on("console", async (msg) => {
        if (msg.text().includes("Content Security Policy")) {
          const loc = msg.location();
          const message = msg.text();
          await dataset.pushData({
            url: request.url.replace(TEST_ORIGIN, ""),
            file: loc.url
              .replace(TEST_ORIGIN, "")
              .replace("/static", "")
              .replace(/\?v=\w+/, ""),
            line: loc.lineNumber,
            col: loc.columnNumber,
            message: message.includes("style-src")
              ? "style-src"
              : message.includes("script-src")
              ? "script-src"
              : message
                  .replace(
                    /because it violates the following Content Security Policy directive.+/,
                    "",
                  )
                  .trim(),
          });
        }
      });
    },
  ],
});

await crawler.run(startUrls);

await dataset.exportToCSV("csp-scan-results");
