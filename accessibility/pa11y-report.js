const fs = require("fs");
const { convertArrayToCSV } = require("convert-array-to-csv");

const issues = require("./data/pa11y.json");

const uniqueIssues = issues.reduce((unique, issue) => {
  const {
    label,
    documentTitle,
    pageUrl,
    code,
    context,
    message,
    type,
    selector,
  } = issue;
  const id = `${issue.code}${issue.selector}${issue.context}`;
  const uniqueIssue = unique[id];

  const instance = {
    label,
    documentTitle,
    pageUrl,
  };

  if (uniqueIssue) {
    unique[id].instances.push(instance);
  } else {
    unique[id] = {
      code,
      context,
      message,
      type,
      selector,
      instances: [instance],
    };
  }

  return unique;
}, {});

const rows = Object.values(uniqueIssues).map((issue) => {
  const { code, context, message, selector, instances } = issue;

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

  return [message, code, instances.length, selector, context, instancesLabel];
});

const csvHeader = [
  "Issue",
  "Code",
  "Occurences",
  "Selector",
  "Context",
  "Occurences",
];

const csv = convertArrayToCSV(rows, {
  header: csvHeader,
});

fs.writeFileSync("pa11y.csv", csv, "utf8");
