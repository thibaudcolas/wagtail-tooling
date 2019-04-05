const fs = require("fs");
const scenarios = require("./scenarios");

const { convertArrayToCSV } = require("convert-array-to-csv");

const rows = [];

scenarios.forEach((scenario, i) => {
  const states = scenario.states ? [""].concat(scenario.states) : [""];

  states.forEach((state, j) => {
    const category =
      (i === 0 || scenarios[i - 1].category !== scenario.category) && j === 0
        ? scenario.category
        : "";
    const label = j === 0 ? scenario.label : "";
    const path = j === 0 ? scenario.path : "";
    rows.push([category, label, state, path]);
  });
});

const csv = convertArrayToCSV(rows, {
  header: ["Category", "View", "State", "Path"],
});

fs.writeFileSync(`./data/scenarios.csv`, csv, "utf8");
