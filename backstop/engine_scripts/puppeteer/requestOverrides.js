const wagtailUpgradeAvailable = {
  "https://releases.wagtail.org/latest.txt": {
    status: 200,
    contentType: "binary/octet-stream",
    headers: {
      "access-control-allow-methods": "GET",
      "access-control-allow-origin": "*",
    },
    body: JSON.stringify({
      version: "999",
      url: "https://docs.wagtail.org/en/v999/releases/999.html",
    }),
  },
};

const adminAPIFailure = {
  "/admin/api/v2beta/": {
    status: 500,
  },
};

const adminAPISlow = {
  "/admin/api/v2beta/": 1000,
};

module.exports = {
  wagtailUpgradeAvailable,
  adminAPIFailure,
  adminAPISlow,
};
