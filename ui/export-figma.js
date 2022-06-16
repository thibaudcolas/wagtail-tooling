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

    const components = scenario.components || [];
    const componentsLabel = components.map((c) => c.label || c).join(", ");
    const componentsWorkNeeded = Array.from(
      new Set(
        components.map((component) => {
          const comp = allComponents.find(
            (c) => c.label === component.label || c.label === component,
          );
          return comp?.workNeeded || null;
        }),
      ),
    )
      .filter(Boolean)
      .join(", ");
    const workNeededLabel = scenario.workNeeded || componentsWorkNeeded;
    const meta = `${scenario.nextReleaseTarget}${
      workNeededLabel ? ": " : ""
    }${workNeededLabel}`;

    rows.push([
      "",
      scenario.label,
      componentsLabel,
      `https://bakerydemo-thibaudcolas6.herokuapp.com/admin${scenario.path}`,
      meta,
    ]);

    const states = scenario.states || [];

    states.forEach((s) => {
      if (s.path && s.path !== scenario.path) {
        rows.push([
          "",
          s.label,
          "",
          `https://bakerydemo-thibaudcolas6.herokuapp.com/admin${s.path}`,
        ]);
      }
    });
  });

const csv = convertArrayToCSV(rows, {
  // prettier-ignore
  header: [
    "Category",
    "View",
    "Components",
    "URL",
    "Meta",
  ],
});

fs.writeFileSync(`./ui/data/figma.csv`, csv, "utf8");
