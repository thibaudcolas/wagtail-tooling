const fs = require("fs");
const { convertArrayToCSV } = require("convert-array-to-csv");

const manualIssues = require("./manual-testing.json");
const automatedIssues = require("./data/pa11y.json");

// const axeToHTMLCS = require("./axe-htmlcs-mapping.json");
// const htmlcsToAxe = Object.keys(axeToHTMLCS).reduce((obj, k) => {
//   obj[axeToHTMLCS[k]] = k;
//   return obj;
// }, {});

const issues = [...manualIssues, ...automatedIssues];

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
    runner,
  } = issue;
  // let codeCompat = runner === "htmlcs" ? htmlcsToAxe[code] : axeToHTMLCS[code];
  // const issueCode = runner === "htmlcs" ? [codeCompat, code] : [code, codeCompat]

  const id = `${code}${selector}${context}`;
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
      runner,
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
