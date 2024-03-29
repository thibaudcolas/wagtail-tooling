const fs = require("fs");
const axeRules = require("./axe-rules");
const htmlcsRules = require("./htmlcs-rules");
const wcag21 = require("./wcag21");

const axeSuccessCriteria = {};
Object.keys(axeRules).forEach((id) => {
  const rule = axeRules[id];
  const wcagTags = rule.tags
    .filter((tag) => tag.startsWith("wcag") && !tag.endsWith("a"))
    .map((tag) => tag.replace("wcag", "").split("").join("."));

  axeSuccessCriteria[id] = wcagTags;
});

const axeStandardLevel = {};
Object.keys(axeRules).forEach((id) => {
  const rule = axeRules[id];
  const wcagTags = rule.tags
    .filter((tag) =>
      ["wcag2a", "wcag2aa", "wcag2aaa", "wcag21a", "wcag21aa"].includes(tag),
    )
    .map((tag) =>
      tag.replace("21a", "2.1 A").replace("2a", "2.0 A").toUpperCase(),
    );

  axeStandardLevel[id] = wcagTags ? wcagTags[0] : null;
});

const rulesMapping = {};
Object.keys(axeRules).forEach((id) => {
  const rule = axeRules[id];

  const matches = Object.keys(htmlcsRules).filter((htmlcsId) => {
    const htmlcsRule = htmlcsRules[htmlcsId];
    return rule.sc.includes(htmlcsRule.sc);
  });

  // matches.forEach((match) => {
  //   const htmlcsRule = htmlcsRules[match];
  //   if (htmlcsRule.standard !== rule.standard) {
  //     console.log(htmlcsRule.standard, rule.standard);
  //   }

  //   if (htmlcsRule.level !== rule.level) {
  //     console.log(htmlcsRule.level, rule.level);
  //   }
  // });

  rulesMapping[id] = matches;
});

const scMapping = {};

wcag21.principles.forEach((principle) => {
  principle.guidelines.forEach((guideline) => {
    guideline.successcriteria.forEach((sc) => {
      const { id, alt_id, num, versions, level, handle, title } = sc;

      const rules = {};

      rules.axe = Object.keys(axeRules).filter((id) =>
        axeRules[id].sc.includes(sc.num),
      );

      rules.htmlcs = Object.keys(htmlcsRules).filter(
        (id) => htmlcsRules[id].sc === sc.num,
      );

      rules.manual = [];

      scMapping[sc.num] = {
        id,
        alt_id,
        num,
        versions,
        level,
        handle,
        title,
        rules,
      };

      // if (rules.axe.length === 0 || rules.htmlcs.length === 0) {
      //   console.log(num, title);
      // }
    });
  });
});

fs.writeFileSync(
  "./success-criteria-mapping.json",
  JSON.stringify(scMapping, null, 2),
  "utf8",
);
