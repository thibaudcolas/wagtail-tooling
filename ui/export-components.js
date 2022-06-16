const fs = require("fs");
const scenarios = require("./scenarios");
const allComponents = require("./components");

const { convertArrayToCSV } = require("convert-array-to-csv");

const rows = [];

allComponents
  .filter((s) => !s.skipReport)
  .forEach((component, i) => {
    const isNewCategory =
      i === 0 || allComponents[i - 1].category !== component.category;

    if (isNewCategory) {
      rows.push([component.category]);
    }

    const states = component.states || [];
    const statesLabel = states.map((state) => state.label || state).join(", ");
    const variations = component.variations || [];
    const variationsLabel = variations.map((v) => v.label || v).join(", ");
    const subComp = component.components || [];
    const subCompLabel = subComp.map((c) => c.label || c).join(", ");

    rows.push([
      "",
      component.label,
      "",
      component.audience,
      component.frequency,
      subCompLabel,
      variationsLabel,
      statesLabel,
      component.lastUpdated,
      component.workNeeded,
      component.nextReleaseTarget,
      component.notes,
    ]);

    if (component.label !== "Table listing") {
      scenarios.forEach((scenario) => {
        if (scenario.components?.includes(component.label)) {
          rows.push(["", "", `${scenario.category} - ${scenario.label}`]);
        } else {
          const variation = scenario.components?.find((c) =>
            c ? component.variations.includes(c?.label || c) : false,
          );
          if (variation) {
            rows.push([
              "",
              "",
              `${scenario.category} - ${scenario.label} (${
                variation.label || variation
              })`,
            ]);
          }
        }
      });
    }
  });

const csv = convertArrayToCSV(rows, {
  header: [
    "Category",
    "Component",
    "Usage",
    "Audience",
    "Frequency",
    "Components",
    "Variations",
    "States",
    "Last updated",
    "Work needed",
    "Wagtail 4.0 target",
    "Notes",
  ],
});

fs.writeFileSync(`./ui/data/components.csv`, csv, "utf8");
