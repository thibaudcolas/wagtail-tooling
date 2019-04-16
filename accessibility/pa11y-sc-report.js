const fs = require("fs");
const { convertArrayToCSV } = require("convert-array-to-csv");

const wcag21 = require("./docs/wcag21.json");
const { getUniqueIssues } = require("./pa11y-dedupe");

const csvHeader = [
  "Category",
  "Issue",
  "Code",
  "Impact",
  "Occurences",
  "Selector",
  "Context",
  "Occurences",
  "Screenshots",
];

const rows = [];

const uniqueIssues = getUniqueIssues();

const getIssueRow = (issue) => {
  const { label, code, impact, context, selector, instances } = issue;

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
    "",
    label,
    code,
    impact,
    instances.length,
    selector,
    context,
    instancesLabel,
    screenshots,
  ];
};

wcag21.principles.forEach((principle) => {
  const principleLabel = `Principle ${principle.num} - ${principle.handle}`;
  rows.push([""]);
  rows.push([principleLabel]);
  rows.push([principle.title]);
  principle.guidelines.forEach((guideline) => {
    const guidelineLabel = `Guideline ${guideline.num} - ${guideline.handle}`;
    rows.push([""]);
    rows.push([guidelineLabel]);

    guideline.successcriteria
      .filter((sc) => sc.level !== "AAA")
      .forEach((sc) => {
        const scLabel = `${sc.num} ${sc.handle} - Level ${sc.level}`;
        rows.push([""]);
        rows.push([scLabel]);
        rows.push([""]);

        uniqueIssues
          .filter((issue) => issue.wcagSC.includes(sc.num))
          .forEach((issue) => {
            rows.push(getIssueRow(issue));
          });
      });
  });
});

rows.push([""]);
rows.push(["Bonus: best practices to apply"]);

uniqueIssues
  .filter((issue) => !issue.wcagSC)
  .forEach((issue) => {
    rows.push(getIssueRow(issue));
  });

const csv = convertArrayToCSV(rows, {
  header: csvHeader,
});

fs.writeFileSync("pa11y-sc-report.csv", csv, "utf8");
