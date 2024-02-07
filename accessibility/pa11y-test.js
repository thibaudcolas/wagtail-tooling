const fs = require("fs");
const pa11y = require("pa11y");
const puppeteer = require("puppeteer");
const lighthouse = require("lighthouse");

require("dotenv").config();

const scenarios = require("../ui/scenarios");

const WAGTAIL_SESSIONID = process.env.WAGTAIL_SESSIONID;

const ADMIN_ROOT = "http://localhost:8000/admin";

let views = [];

const hasOnlyFlag = (s) =>
  s.only || (s.states && s.states.find((state) => state.only));

const HAS_ONLY_FILTER = scenarios.find(hasOnlyFlag);

scenarios.forEach((scenario) => {
  const states = scenario.states || [];

  views.push(scenario);

  states
    .filter((s) => typeof s === "object")
    .forEach((state) => {
      views.push({
        ...scenario,
        ...state,
        label: `${scenario.label} - ${state.label}`,
        // emulateVisionDeficiency: "achromatopsia",
        // emulateMediaFeatures: [
        //   { name: "forced-colors", value: "active" },
        //   { name: "prefers-contrast", value: "more" },
        // ],
      });
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
  // let page = await browser.newPage();
  // await page.deleteCookie({
  //   name: "sessionid",
  //   domain: "localhost",
  //   path: "/",
  // });
  // await page.goto(`${ADMIN_ROOT}/login`);
  // await page.type("#id_username", "admin");
  // await page.type("#id_password", "changeme");
  // await page.keyboard.press("Enter");
  // await page.waitForSelector(".page404__header");
  // const sessionid = await page.evaluate(() => {
  //   const cookieMatch = document.cookie.match(/sessionid=([^;]+)/);
  //   return cookieMatch ? cookieMatch[1] : "error";
  // });

  // // We will be setting the cookie manually per-page. Do not want it to be stored for the whole browser.
  // await page.deleteCookie({
  //   name: "sessionid",
  //   domain: "localhost",
  //   path: "/",
  // });

  return {
    name: "sessionid",
    domain: "localhost",
    path: "/",
    value: WAGTAIL_SESSIONID,
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

      const headers = {
        Cookie: `sessionid=${sharedCookie.value};`,
      };

      await page.setRequestInterception(true);
      page.removeAllListeners("request");
      let interceptionHandled = false;
      page.on("request", (request) => {
        // This is normally implemented by pa11y. We do this ourselves because it would be incompatible with any other request override.
        const overrides = {};
        if (!scenario.unauthenticated) {
          if (!interceptionHandled) {
            overrides.headers = {};
            for (const [key, value] of Object.entries(headers)) {
              overrides.headers[key.toLowerCase()] = value;
            }

            interceptionHandled = true;
          }
        }

        if (scenario.requestOverrides) {
          const overrideKey = Object.keys(scenario.requestOverrides).find(
            (path) => request.url().includes(path),
          );
          const override = scenario.requestOverrides[overrideKey];

          if (override) {
            if (typeof override === "object") {
              request.respond(override);
            } else {
              setTimeout(() => {
                request.continue();
              }, override);
            }
            return;
          }
        }

        request.continue(overrides);
      });

      await page.deleteCookie({
        name: "sessionid",
        domain: "localhost",
        path: "/",
      });

      if (!scenario.unauthenticated) {
        if (sharedCookie === "error") {
          throw new Error(
            "sessionid cookie is unreadable. Did you set up SESSION_COOKIE_HTTPONLY = False in Django settings?",
          );
        }
        await page.setCookie(sharedCookie);
      }

      if (scenario.emulateVisionDeficiency) {
        await page.emulateVisionDeficiency(scenario.emulateVisionDeficiency);
      }

      if (scenario.emulateMediaFeatures) {
        const client = await page.target().createCDPSession();
        await client.send("Emulation.setEmulatedMedia", {
          features: scenario.emulateMediaFeatures,
        });
      }

      const fullLabel = `${scenario.category} – ${scenario.label}`;

      const pa11yOptions = {
        standard: "WCAG2AAA",
        log: {
          debug: console.log,
          error: console.error,
          info: console.log,
        },
        runners: ["axe", "htmlcs"],
        ignore: [
          // The heading structure is not logically nested.
          "WCAG2AAA.Principle1.Guideline1_3.1_3_1_AAA.G141",
          // This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 7:1.
          "WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail",
        ],
        actions: scenario.actions || [],
        viewport: scenario.viewport || {
          width: 1024,
          height: 768,
          deviceScaleFactor: 1,
          isMobile: false,
        },
        screenCapture: `${__dirname}/data/screenshots/${fullLabel}.png`,
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
            label: fullLabel,
            documentTitle: result.documentTitle,
            pageUrl: result.pageUrl,
            code: issue.code,
            context: issue.context,
            message: issue.message,
            type: issue.type,
            selector: issue.selector,
            runner: issue.runner,
            screenshot: `${fullLabel}.png`,
            lighthouseReport: `${fullLabel}.html`,
          };
        }),
      );

      fs.writeFileSync(`./pa11y.json`, JSON.stringify(issues, null, 2), "utf8");

      const runnerResult = await lighthouse(`${ADMIN_ROOT}${scenario.path}`, {
        port: new URL(browser.wsEndpoint()).port,
        onlyCategories: ["accessibility", "best-practices", "seo"],
        // onlyCategories: ["accessibility", "best-practices", "seo", "pwa", "performance"],
        output: "html",
        // logLevel: "info",
      });
      const reportHtml = runnerResult.report;
      fs.writeFileSync(
        `${__dirname}/data/lighthouse/${fullLabel}.html`,
        reportHtml,
      );
    }
  } catch (error) {
    // Output an error if it occurred
    console.error(error.message);
  }

  browser.close();
};

run();
