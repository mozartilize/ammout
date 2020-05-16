const path = require("path");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-unused-vars": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/extensions": [".vue", ".ts"],
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: { "@": path.resolve(__dirname, "src") },
            extensions: [".vue", ".ts"],
          },
        },
      },
    },
  },
};
