const fs = require("fs");
const scenarios = require("./scenarios");

const { convertArrayToCSV } = require("convert-array-to-csv");

const rows = [];

scenarios.forEach((scenario, i) => {
  const isNewCategory =
    i === 0 || scenarios[i - 1].category !== scenario.category;

  if (isNewCategory) {
    rows.push([scenario.category]);
  }

  const states = scenario.states || [];
  const statesLabel = states.map((state) => state.label || state).join(", ");

  rows.push([
    "",
    scenario.label,
    scenario.path,
    "",
    "",
    statesLabel,
    scenario.notes,
  ]);
});

const csv = convertArrayToCSV(rows, {
  header: [
    "Category",
    "View",
    "Path",
    "Relevance",
    "Review comments",
    "States",
    "UI notes",
  ],
});

fs.writeFileSync(`./ui/data/scenarios.csv`, csv, "utf8");
