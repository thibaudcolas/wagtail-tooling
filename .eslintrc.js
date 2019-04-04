module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },

  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },

  extends: "eslint:recommended",

  rules: {
    "no-console": "off",
  },
};
