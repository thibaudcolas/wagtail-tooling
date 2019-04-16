const fs = require("fs");
const { convertArrayToCSV } = require("convert-array-to-csv");

const { getUniqueIssues } = require("./pa11y-dedupe");

const csvHeader = [
  "Issue",
  "Code",
  "Standard",
  "Level",
  "Success criteria",
  "Impact",
  "Occurences",
  "Selector",
  "Context",
  "Occurences",
  "Screenshots",
];

const uniqueIssues = getUniqueIssues();

const rows = uniqueIssues.map((issue) => {
  const {
    label,
    code,
    wcagSC,
    standard,
    wcagLevel,
    impact,
    context,
    selector,
    instances,
  } = issue;

  const instancesLabel = issue.instances
    .map(
      (instance) =>
        `${instance.label} (${instance.pageUrl.replace(
          "http://localhost:8000/admin",
          "",
        )})`,
    )
    .join(", ")
    .substr(0, 100);

  const screenshots = issue.instances
    .map((instance) => instance.screenshot)
    .join(", ")
    .substr(0, 100);

  return [
    label,
    code,
    standard,
    wcagLevel,
    wcagSC,
    impact,
    instances.length,
    selector,
    context,
    instancesLabel,
    screenshots,
  ];
});

const csv = convertArrayToCSV(rows, {
  header: csvHeader,
});

fs.writeFileSync("pa11y.csv", csv, "utf8");
