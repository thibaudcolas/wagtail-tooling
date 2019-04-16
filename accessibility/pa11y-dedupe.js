const automatedIssues = require("./data/pa11y.json");

const axeRules = require("./docs/axe-rules");
const htmlcsRules = require("./docs/htmlcs-rules");
const rulesMapping = require("./docs/axe-htmlcs-mapping.json");

const runnerMapping = {
  axe: rulesMapping,
  htmlcs: Object.entries(rulesMapping).reduce((mapping, entry) => {
    if (entry[1]) {
      mapping[entry[1]] = entry[0];
    }
    return mapping;
  }, {}),
};
// const successCriteriaMapping = require("./docs/success-criteria-mapping.json");

const runnerRules = {
  htmlcs: htmlcsRules,
  axe: axeRules,
  manual: {},
};

const allRules = Object.assign({}, htmlcsRules, axeRules);

const issues = [
  // ...manualIssues,
  ...automatedIssues,
];

const getUniqueIssues = () => {
  const uniqueIssues = issues.reduce((unique, issue) => {
    const {
      label,
      documentTitle,
      pageUrl,
      code,
      context,
      message,
      selector,
      runner,
      screenshot,
    } = issue;
    const rule = runnerRules[runner][code];
    const opposingCode = runner === "manual" ? "" : runnerMapping[runner][code];
    const opposingRule = allRules[opposingCode];
    // const sc = Array.isArray(rule.sc) ? rule.sc : [rule.sc];

    // Get a warning if a rule cannot be mapped to anything.
    if (!rule) {
      console.log(code);
    }

    let hash = `${code}${context}`;
    let uniqueIssue = unique[hash];

    if (!uniqueIssue) {
      hash = `${opposingCode}${context}`;
      uniqueIssue = unique[hash];
    }

    const instance = {
      label,
      documentTitle,
      pageUrl,
      screenshot,
      selector,
    };

    if (uniqueIssue) {
      unique[hash].instances.push(instance);
    } else {
      unique[hash] = {
        label: message,
        description: "",
        wcagSC: Array.isArray(rule.sc) ? rule.sc.join(", ") : rule.sc,
        standard: rule.standard || rule.runner,
        wcagLevel: rule.level || "Best practice",
        impact: rule.impact || (opposingRule && opposingRule.impact) || "",
        code: code,
        instances: [instance],
        furtherDescription: "",
        context: context,
        selector: selector,
        analystComment: "",
        solutions: [],
        estimation: "",
        ticket: "",
        runner: runner,
      };
    }

    return unique;
  }, {});

  return Object.values(uniqueIssues);
};

module.exports = {
  getUniqueIssues,
};
