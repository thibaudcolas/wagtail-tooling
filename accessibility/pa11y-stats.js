const { getUniqueIssues } = require("./pa11y-dedupe");
const scenarios = require("../ui/scenarios");

const allViews = [];
const testedViews = [];

scenarios.forEach((scenario) => {
  const states = scenario.states || [];

  allViews.push(scenario);
  testedViews.push(scenario);

  states.forEach((state) => allViews.push(state));

  states
    .filter((s) => typeof s === "object")
    .forEach((state) => {
      testedViews.push(
        Object.assign({}, scenario, state, {
          label: `${scenario.label} - ${state.label}`,
        }),
      );
    });
});

console.log("Scenarios identified: ", allViews.length);
console.log("Scenarios tested: ", testedViews.length);

const uniqueIssues = getUniqueIssues();

console.log("Automated issues found: ", uniqueIssues.length);
