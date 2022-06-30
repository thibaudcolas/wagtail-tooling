const fs = require("fs");

const issues = require("./data/pa11y.json");
const allScenarios = require("../ui/scenarios");

const scenarios = allScenarios
  // .reduce((list, scenario) => {
  //   const states = scenario.states || [];
  //   const newEntries = [scenario].concat(states);
  //   return list.concat(newEntries);
  // }, [])
  .filter((s) => !Boolean(s.skip));

const categories = [...new Set(scenarios.map((s) => s.category))];

const scenariosByCategory = categories.reduce(
  (by, c) => ({
    ...by,
    [c]: scenarios.filter((s) => s.category === c),
  }),
  {},
);

const issuesByScenario = issues.reduce((by, issue) => {
  by[issue.label] = by[issue.label] || [];

  by[issue.label].push(issue);

  return by;
}, {});

/**
 * See https://stackoverflow.com/a/1054862/1798491.
 */
const slug = (str) =>
  str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[-–]+/g, "-")
    .replace(/[^\w-]+/g, "");

/**
 * String concatenation disguised as lit-html, for syntax highlighting purposes.
 */
const html = (strings, ...values) => {
  return strings.reduce((out, str, i) => {
    const val = values[i] ?? "";
    return out + str + val;
  }, "");
};

const githubCorner = html`
  <a
    href="https://github.com/thibaudcolas/wagtail-tooling"
    class="github-corner"
    aria-label="View source on GitHub"
    ><svg
      width="80"
      height="80"
      viewBox="0 0 250 250"
      style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor"
        style="transform-origin: 130px 106px;"
        class="octo-arm"
      ></path>
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor"
        class="octo-body"
      ></path></svg></a
  ><style>
    .github-corner:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
    @keyframes octocat-wave {
      0%,
      100% {
        transform: rotate(0);
      }
      20%,
      60% {
        transform: rotate(-25deg);
      }
      40%,
      80% {
        transform: rotate(10deg);
      }
    }
    @media (max-width: 500px) {
      .github-corner:hover .octo-arm {
        animation: none;
      }
      .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
    }
  </style>
`;

const Scenario = (scenario) => {
  const { category, label, path, states } = scenario;
  const fullLabel = `${category} – ${label}`;
  const issues = issuesByScenario[fullLabel] || [];
  const axeIssues = issues.filter((i) => i.runner === "axe");
  const htmlcsIssues = issues.filter((i) => i.runner === "htmlcs");

  if (scenario.skip || scenario.skipReport) {
    return "";
  }

  return html`
    <div style="margin-left: 3rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr;">
        <div>
          <h3 id="scenario-${slug(category)}-${slug(label)}">
            ${label}
            <a
              href="#scenario-${slug(category)}-${slug(label)}"
              aria-hidden="true"
              >#</a
            >
          </h3>
          <p>
            Path:
            <a href="http://localhost:8000/admin${path}"
              ><code>${path}</code></a
            >
          </p>
          <p>
            Lighthouse:
            <a href="lighthouse/${encodeURIComponent(fullLabel)}.html"
              ><code>${fullLabel}.html</code></a
            >
          </p>
          <details>
            <summary>Scenario</summary>
            <pre><code>${JSON.stringify(scenario, null, 2)}</code></pre>
          </details>
          <details>
            <summary>Axe issues: ${axeIssues.length}</summary>
            <ul>
              ${axeIssues
                .map(
                  (issue) => html`
                    <li>
                      <p>
                        <code>${issue.runner} ${issue.code}</code>:
                        ${issue.message}
                      </p>
                      <p>${issue.selector}</p>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </details>
          <details>
            <summary>HTML_CS: ${htmlcsIssues.length}</summary>
            <ul>
              ${htmlcsIssues
                .map(
                  (issue) => html`
                    <li>
                      <p>
                        <code>${issue.runner} ${issue.code}</code>:
                        ${issue.message}
                      </p>
                      <p>${issue.selector}</p>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </details>
        </div>
        <a
          href="screenshots/${encodeURIComponent(fullLabel)}.png"
          aria-label="Open screenshot of ${fullLabel}"
          style="display: block; max-height: 500px; overflow: auto;"
        >
          <img
            src="screenshots/${encodeURIComponent(fullLabel)}.png"
            alt="Screenshot of ${fullLabel}"
            style="width: 100%; max-width: 40vw;"
            width="300"
            loading="lazy"
          />
        </a>
      </div>
      ${states
        ? states
            .map((s) =>
              Scenario({
                category,
                path,
                ...s,
                label: `${label} - ${s.label}`,
              }),
            )
            .join("")
        : ""}
    </div>
  `;
};

const Category = (category, i) => {
  return html`
    <section aria-labelledby="category-${slug(category)}">
      <h2 id="category-${slug(category)}">
        ${category}
        <a href="#category-${slug(category)}" aria-hidden="true">#</a>
      </h2>
      ${scenariosByCategory[category].map(Scenario).join("")}
    </section>
  `;
};

const OverviewRow = (scenarioLabel) => {
  const issues = issuesByScenario[scenarioLabel];
  const axeIssues = issues.filter((i) => i.runner === "axe");
  const htmlcsIssues = issues.filter((i) => i.runner === "htmlcs");

  if (issues.length === 0) {
    return html` <tr>
      <td>No issues!</td>
    </tr>`;
  }

  const { label, pageUrl, screenshot, lighthouseReport } = issues[0];

  return html`
    <tr>
      <td>${label}</td>
      <td>${axeIssues.length}</td>
      <td>${htmlcsIssues.length}</td>
      <td>
        <a href="#scenario-${slug(label)}" aria-label="jump to ${label}">jump</a
        >, <a href="${pageUrl}" aria-label="path - ${label}">path</a>,
        <a
          href="screenshots/${encodeURIComponent(screenshot)}"
          aria-label="screenshot - ${screenshot}"
          >screenshot</a
        >,
        <a
          href="lighthouse/${encodeURIComponent(lighthouseReport)}"
          aria-label="lighthouse - ${lighthouseReport}"
          ${lighthouseReport ? "" : "hidden"}
          >lighthouse</a
        >
      </td>
    </tr>
  `;
};

const report = html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Wagtail admin tests report | Pa11y + Lighthouse</title>
      <meta
        name="description"
        content="Automated accessibility CI tests for Wagtail, based on Pa11y and Lighthouse"
      />
      <style>
        html {
          font-size: 1.25rem;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
            Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        body {
          max-width: 1260px;
          margin: 0 auto;
          padding: 1rem;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Wagtail admin accessibility tests</h1>
        <p>
          Automated accessibility tests from
          <a href="https://github.com/thibaudcolas/wagtail-tooling"
            >github.com/thibaudcolas/wagtail-tooling</a
          >.
        </p>
        <p>
          Generated:
          <time>${new Date().toISOString().replace("T", " ")}</time>
        </p>
        <p>
          All issues:
          <a href="pa11y.json"><code>pa11y.json</code> (large file)</a>
        </p>
        <p>
          Running with Axe and HTML CodeSniffer via
          <a href="https://pa11y.org/">Pa11y</a>, and Lighthouse.
        </p>
      </header>
      <main>
        <h2 id="overview">
          Overview <a href="#overview" aria-hidden="true">#</a>
        </h2>
        <table>
          <caption>
            Overview of test results
          </caption>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Axe issues</th>
              <th>HTML_CS issues</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            ${Object.keys(issuesByScenario).map(OverviewRow).join("")}
          </tbody>
        </table>
        ${categories.map(Category).join("")}
      </main>
      <footer>${githubCorner}</footer>
    </body>
  </html>
`;

fs.writeFileSync(`${__dirname}/data/report.html`, report);
