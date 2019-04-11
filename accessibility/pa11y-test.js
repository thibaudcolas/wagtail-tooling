const fs = require("fs");
const pa11y = require("pa11y");
const puppeteer = require("puppeteer");

const scenarios = require("../ui/scenarios");

const ADMIN_ROOT = "http://localhost:8000/admin";

let views = [];

const hasOnlyFlag = (s) =>
  s.only || (s.states && s.states.find((state) => state.only));

const HAS_ONLY_FILTER = scenarios.find(hasOnlyFlag);

scenarios.forEach((scenario) => {
  if (!views.find((v) => v.path === scenario.path)) {
    views.push(scenario);
  }

  const states = scenario.states || [];

  states
    .filter((s) => typeof s === "object")
    .forEach((state) => {
      views.push(
        Object.assign({}, scenario, state, {
          label: `${scenario.label}: ${state.label}`,
        }),
      );
    });
});

const shouldTest = (s) => {
  if (HAS_ONLY_FILTER) {
    return s.only;
  }

  return !s.skip;
};

views = views.filter(shouldTest);

const getAuthCookie = async (browser) => {
  let page = await browser.newPage();
  await page.deleteCookie({
    name: "sessionid",
    domain: "localhost",
    path: "/",
  });
  await page.goto(`${ADMIN_ROOT}/login`);
  await page.type("#id_username", "admin");
  await page.type("#id_password", "changeme");
  await page.keyboard.press("Enter");
  await page.waitFor(".page404__header");
  const sessionid = await page.evaluate(() => {
    const cookieMatch = document.cookie.match(/sessionid=(.+)(;|$)/);
    return cookieMatch ? cookieMatch[1] : "test";
  });

  // We will be setting the cookie manually per-page. Do not want it to be stored for the whole browser.
  await page.deleteCookie({
    name: "sessionid",
    domain: "localhost",
    path: "/",
  });

  return {
    name: "sessionid",
    domain: "localhost",
    path: "/",
    value: sessionid,
    expirationDate: 1798790400,
    hostOnly: false,
    httpOnly: false,
    secure: false,
    session: false,
    sameSite: "no_restriction",
  };
};

const run = async () => {
  const browser = await puppeteer.launch();

  try {
    let issues = [];

    const sharedCookie = await getAuthCookie(browser);

    for (const scenario of views) {
      console.log(scenario.label, scenario.path);

      const page = await browser.newPage();

      await page.deleteCookie({
        name: "sessionid",
        domain: "localhost",
        path: "/",
      });

      if (!scenario.unauthenticated) {
        await page.setCookie(sharedCookie);
      }

      const pa11yOptions = {
        standard: "WCAG2AAA",
        log: {
          debug: console.log,
          error: console.error,
          info: console.log,
        },
        runners: ["axe", "htmlcs"],
        actions: scenario.actions || [],
        headers: {
          Cookie: `sessionid=${
            scenario.unauthenticated ? "test" : sharedCookie.value
          };`,
        },
        viewport: {
          width: 1024,
          height: 768,
          deviceScaleFactor: 1,
          isMobile: false,
        },
        screenCapture: `${__dirname}/data/screenshots/${scenario.label}.png`,
        browser,
        page,
      };

      const result = await pa11y(`${ADMIN_ROOT}${scenario.path}`, pa11yOptions);

      if (HAS_ONLY_FILTER) {
        console.log(result);
      }

      issues = issues.concat(
        result.issues.map((issue) => {
          return {
            label: `${scenario.category} – ${scenario.label}`,
            documentTitle: result.documentTitle,
            pageUrl: result.pageUrl,
            code: issue.code,
            context: issue.context,
            message: issue.message,
            type: issue.type,
            selector: issue.selector,
            runner: issue.runner,
            screenshot: `${scenario.label}.png`,
          };
        }),
      );

      fs.writeFileSync(`./pa11y.json`, JSON.stringify(issues, null, 2), "utf8");
    }
  } catch (error) {
    // Output an error if it occurred
    console.error(error.message);
  }

  browser.close();
};

run();
