const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const { roles, elementRoles } = require("aria-query");

const folderPath = "../html";

const outputFile = "aria-label-patterns.csv";

const header =
  [
    "role",
    "tagName",
    "role allows",
    "ariaLabelStartsWithVisibleText",
    "visibleTextInAriaLabel",
    "aria-label",
    "innerText",
    "startTag",
  ]
    .map((col) => `"${col}"`)
    .join(",") + "\n";

fs.writeFileSync(outputFile, header);

function escapeCSV(text) {
  return `"${String(text).replace(/"/g, '""')}"`;
}

function getImplicitRole(elem) {
  const tagName = elem.name;
  const attribs = elem.attribs || {};

  for (const [elementDef, roles] of elementRoles.entries()) {
    if (elementDef.name === tagName) {
      let matches = true;
      if (elementDef.attributes && elementDef.attributes.size > 0) {
        for (const [attrName, attrValues] of elementDef.attributes.entries()) {
          // If the element doesn't have the attribute or its value isn't in the allowed set, it's not a match.
          if (!attribs[attrName] || !attrValues.has(attribs[attrName])) {
            matches = false;
            break;
          }
        }
      }

      // Refine the match when the tag name maps to different roles based on attributes.
      // See https://www.w3.org/TR/html-aam-1.0/.
      if (matches) {
        if (elementDef.name === "a" && attribs.href) {
          return "link";
        }

        if (elementDef.name === "input" && attribs.type) {
          if (attribs.type === "checkbox" || attribs.type === "radio") {
            return attribs.type;
          } else if (attribs.type === "button" || attribs.type === "submit") {
            return "button";
          } else if (attribs.type === "text" || attribs.type === "password") {
            return "textbox";
          } else if (attribs.type === "range") {
            return "slider";
          } else if (attribs.type === "search") {
            return "searchbox";
          }
        }

        // Return the roles as a comma-separated string.
        return Array.from(roles).join(", ");
      }
    }
  }
  return "";
}

function processFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", filePath, err);
      return;
    }
    const $ = cheerio.load(data);

    $("[aria-label]").each((i, elem) => {
      let role = $(elem).attr("role") || "";
      if (!role) {
        role = getImplicitRole(elem);
      }

      const ariaLabel = $(elem).attr("aria-label").replace(/\n/g, " ") || "";
      const tagName = elem.tagName ? elem.tagName.toLowerCase() : "";
      const startTagHTML = ($.html(elem).split(">")[0] + ">").replace(
        /\n/g,
        " "
      );
      // This data is normally in aria-query but that data doesn’t reflect actual behavior of browsers / assistive tech.
      // List from https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label#associated_roles.
      const ariaLabelUnsupported = [
        "code",
        "caption",
        "definition",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "mark",
        "paragraph",
        "presentation",
        "none",
        "strong",
        "subscript",
        "superscript",
        "suggestion",
        "term",
        "time",
      ].includes(role);
      const roleAllowsAriaLabel = !ariaLabelUnsupported;

      let innerText = $(elem).text().replace(/\n/g, " ").trim() || "";

      const isLandmark = [
        "banner",
        "complementary",
        "contentinfo",
        "form",
        "main",
        "navigation",
        "region",
        "search",
      ].includes(role);
      // Treat landmarks as not having text, so usage of aria-label with landmarks is always considered "correct" in the stats above.
      // We want to report issues based on overall number of aria-label occurrences, including landmarks in the total.
      innerText = isLandmark ? "" : innerText;

      const ariaLabelStartsWithVisibleText = ariaLabel.startsWith(innerText);
      const visibleTextInAriaLabel = ariaLabel.includes(innerText);

      const line =
        [
          escapeCSV(role),
          escapeCSV(tagName),
          escapeCSV(roleAllowsAriaLabel ? "Yes" : "No"),
          escapeCSV(ariaLabelStartsWithVisibleText ? "Yes" : "No"),
          escapeCSV(visibleTextInAriaLabel ? "Yes" : "No"),
          escapeCSV(ariaLabel),
          escapeCSV(innerText),
          escapeCSV(startTagHTML),
        ].join(",") + "\n";

      fs.appendFileSync(outputFile, line);
    });
  });
}

function scanDirectory(directoryPath) {
  fs.readdir(directoryPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("Error reading directory:", directoryPath, err);
      return;
    }

    entries.forEach((entry) => {
      const entryPath = path.join(directoryPath, entry.name);

      if (entry.isFile() && entry.name.endsWith(".html")) {
        processFile(entryPath);
      } else if (entry.isDirectory()) {
        // Scan the subdirectory (one level deep).
        fs.readdir(entryPath, { withFileTypes: true }, (err, subEntries) => {
          if (err) {
            console.error("Error reading subdirectory:", entryPath, err);
            return;
          }
          subEntries.forEach((subEntry) => {
            if (subEntry.isFile() && subEntry.name.endsWith(".html")) {
              const subEntryPath = path.join(entryPath, subEntry.name);
              processFile(subEntryPath);
            }
          });
        });
      }
    });
  });
}

scanDirectory(folderPath);
