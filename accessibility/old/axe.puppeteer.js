const puppeteer = require("puppeteer");
const fs = require("fs");

const scenarios = require("../ui/scenarios");

const views = {};

scenarios.forEach((scenario) => {
  if (!views[scenario.path]) {
    views[scenario.path] = `${scenario.category} – ${scenario.label}`;
  }
});

const run = async () => {
  const browser = await puppeteer.launch();
  let issues = [];

  for (const path of Object.keys(views)) {
    try {
      const label = views[path];
      console.log(path);
      const page = await browser.newPage();
      await page.setCookie({
        domain: "localhost",
        path: "/",
        name: "sessionid",
        value: "grdhyy5v829zi6h8hdyoib3cfb8fm18d",
        expirationDate: 1798790400,
        hostOnly: false,
        httpOnly: false,
        secure: false,
        session: false,
        sameSite: "no_restriction",
      });
      await page.goto(`http://localhost:8000/admin${path}`);
      await page.addScriptTag({ path: require.resolve("axe-core") });
      // await page.screenshot({ path: "example.png" });
      const result = await page.evaluate(
        () =>
          new Promise((resolve) => {
            window.axe.run((err, results) => {
              if (err) throw err;
              resolve(results);
            });
          }),
      );
      const documentTitle = await page.title();
      // Output the raw result object
      // console.log(result);

      issues.push({
        label: label,
        documentTitle: documentTitle,
        pageUrl: result.url,
        result: result,
      });

      fs.writeFileSync(
        `./accessibility/data/axe.json`,
        JSON.stringify(issues, null, 2),
        "utf8",
      );
    } catch (error) {
      // Output an error if it occurred
      console.error(error.message);
    }
  }
  await browser.close();
};

run();
