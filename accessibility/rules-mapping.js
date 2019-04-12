const fs = require("fs");
const axe = require("axe-core");
const allAxeRules = axe.getRules(["wcag2a", "wcag2aa", "wcag2aaa"]);

const axeRules = allAxeRules.reduce((rules, rule) => {
  rules[rule.ruleId] = rule.tags;
  console.log(rule);
  return rules;
}, {});

fs.writeFileSync(
  "axe-rule-tags.json",
  JSON.stringify(axeRules, null, 2),
  "utf8",
);
