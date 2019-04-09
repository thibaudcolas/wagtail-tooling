const fs = require("fs");
const pa11y = require("pa11y");

const scenarios = require("../ui/scenarios");

const views = {};

scenarios.forEach((scenario) => {
  if (!views[scenario.path]) {
    views[scenario.path] = `${scenario.category} – ${scenario.label}`;
  }
});

const pa11yOptions = {
  headers: {
    Cookie: "sessionid=grdhyy5v829zi6h8hdyoib3cfb8fm18d",
  },
  log: {
    debug: console.log,
    error: console.error,
    info: console.log,
  },
  runners: ["axe", "htmlcs"],
};

const run = async () => {
  try {
    let issues = [];

    for (const path of Object.keys(views)) {
      const label = views[path];
      console.log(path);
      const result = await pa11y(
        `http://localhost:8000/admin${path}`,
        pa11yOptions,
      );
      // Output the raw result object
      // console.log(result);

      issues = issues.concat(
        result.issues.map((issue) => {
          return {
            label: label,
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
};

run();
