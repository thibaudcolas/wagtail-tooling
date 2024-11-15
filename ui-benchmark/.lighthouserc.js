const origin = process.env.TEST_ORIGIN ?? "http://localhost:8000";

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        // Dashboard
        `${origin}/admin/`,
        // Userbar
        `${origin}/blog/wild-yeast/`,
        // Pages edit
        `${origin}/admin/pages/81/edit/`,
        // Pages listing
        `${origin}/admin/pages/80/`,
        // Images listing
        `${origin}/admin/images/`,
        // Styleguide
        `${origin}/admin/styleguide/`,
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./reports",
    },
  },
};
