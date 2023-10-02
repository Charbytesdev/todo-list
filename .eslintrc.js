module.exports = {
  root: true,
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  "ignore-patterns": "**/dist/*",
  rules: {
    "no-underscore-dangle": "off",
    "no-useless-constructor": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
