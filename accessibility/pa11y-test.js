const fs = require("fs");
const pa11y = require("pa11y");
const puppeteer = require("puppeteer");

const scenarios = require("../ui/scenarios");

const views = [];

const hasOnly = scenarios.find((s) => s.only);

scenarios
  .filter((s) => (hasOnly ? s.only : true))
  .forEach((scenario) => {
    if (!views.find((v) => v.path === scenario.path)) {
      views.push(scenario);
    }

    const states = scenario.states || [];

    states.forEach((state) => {
      views.push(
        Object.assign({}, scenario, state, {
          label: `${scenario.label}: ${state.label}`,
        }),
      );
    });
  });

const run = async () => {
  const browser = await puppeteer.launch();

  let page = await browser.newPage();
  await page.goto(`http://localhost:8000/admin/login`);
  await page.type("#id_username", "admin");
  await page.type("#id_password", "changeme");
  await page.keyboard.press("Enter");
  await page.waitFor(".page404__header");
  const sessionid = await page.evaluate(() => {
    return document.cookie.match(/sessionid=(.+);/)[1];
  });

  const pa11yOptions = {
    standard: "WCAG2AAA",
    headers: {
      Cookie: `sessionid=${sessionid};`,
    },
    log: {
      debug: console.log,
      error: console.error,
      info: console.log,
    },
    runners: ["axe", "htmlcs"],
  };

  console.log(sessionid);

  try {
    let issues = [];

    for (const scenario of views) {
      console.log(scenario.path);

      page = await browser.newPage();
      await page.setCookie({
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
      });

      const options = Object.assign({}, pa11yOptions, {
        actions: scenario.actions || [],
        browser: browser,
        page,
      });

      const result = await pa11y(
        `http://localhost:8000/admin${scenario.path}`,
        options,
      );

      if (hasOnly) {
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
