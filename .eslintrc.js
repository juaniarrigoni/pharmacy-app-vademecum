module.exports = {
  extends: ["@mediamonks/eslint-config-react"],
  parserOptions: {
    project: "tsconfig.json",
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
