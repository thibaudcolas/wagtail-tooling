const fs = require("fs");
const scenarios = require("./scenarios");
const allComponents = require("./components");

const { convertArrayToCSV } = require("convert-array-to-csv");

const rows = [];
let lastCategory = "";

scenarios
  .filter((s) => !s.skipReport)
  .forEach((scenario, i) => {
    const isNewCategory = scenario.category !== lastCategory;

    if (isNewCategory) {
      rows.push([scenario.category]);
      lastCategory = scenario.category;
    }

    rows.push([
      "",
      scenario.label,
      "",
      scenario.path,
      scenario.audience,
      scenario.frequency,
      scenario.lastUpdated,
      scenario.workNeeded,
      scenario.nextReleaseTarget,
      scenario.notes,
      `https://bakerydemo-thibaudcolas6.herokuapp.com/admin${scenario.path}`,
    ]);

    const components = scenario.components || [];
    components.forEach((label) => {
      const c = allComponents.find((c) => c.label === label);
      if (!c) {
        rows.push(["", "", label]);
        return;
      }

      rows.push([
        "",
        "",
        c.label,
        "",
        c.audience && c.audience !== scenario.audience ? c.audience : "",
        c.frequency && c.frequency !== scenario.frequency ? c.frequency : "",
        c.lastUpdated,
        c.workNeeded,
        c.nextReleaseTarget,
        c.notes,
      ]);
    });

    const states = scenario.states || [];

    states.forEach((s) => {
      // prettier-ignore
      rows.push([
        "",
        s.label,
        "",
        s.path && s.path !== scenario.path ? s.path : "",
        s.audience && s.audience !== scenario.audience ? s.audience : "",
        s.frequency && s.frequency !== scenario.frequency ? s.frequency : "",
        s.lastUpdated && s.lastUpdated !== scenario.lastUpdated ? s.lastUpdated : "",
        s.workNeeded && s.workNeeded !== scenario.workNeeded ? s.workNeeded : "",
        s.nextReleaseTarget && s.nextReleaseTarget !== scenario.nextReleaseTarget ? s.nextReleaseTarget : "",
        s.notes && s.notes !== scenario.notes ? s.notes : "",
      ]);
    });
  });

const csv = convertArrayToCSV(rows, {
  header: [
    "Category",
    "View",
    "Components",
    "Path",
    "Audience",
    "Frequency",
    "Last updated",
    "Work needed",
    "Wagtail 4.0 target",
    "Notes",
    "URL",
  ],
});

fs.writeFileSync(`./ui/data/scenarios.csv`, csv, "utf8");
