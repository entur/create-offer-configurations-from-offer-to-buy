const SORT_KEYS_RULES = {
  // A fixable sort-keys rule; see https://github.com/namnm/eslint-plugin-sort-keys
  "sort-keys": "off",
  "sort-keys/sort-keys-fix": ["error", "asc", { natural: true }],
  // Rule which conflicts with `sort-keys/sort-keys-fix`
  "import/order": "off",
};

module.exports = {
  prettier: true,
  plugins: ["jsdoc", "simple-import-sort", "sort-keys", "vitest"],
  extends: ["plugin:jsdoc/recommended", "plugin:vitest/recommended"],
  rules: {
    ...SORT_KEYS_RULES,
    ...getJsdocRules(true),
    curly: "error",
    "multiline-comment-style": ["error", "starred-block"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: "source/types/*.ts",
      rules: { "unicorn/no-abusive-eslint-disable": "off" },
    },
    {
      files: ["*.js"],
      rules: { ...getJsdocRules(false) },
    },
  ],
};

/**
 * Turns on and off certain Jsdoc rules given the file type.
 *
 * Some rules that are useful for Javascript files (such as requiring parameter descriptions and types)
 * are redundant and lead to more work for Typescript files.
 *
 * @param {boolean} isTypescript Whether the file is a Typescript file
 * @returns {Record<string, 'error'|'warn'|'off'>} An object with eslint-plugin-jsdoc rule configurations
 */
function getJsdocRules(isTypescript) {
  return {
    "jsdoc/check-param-names": "error",
    "jsdoc/multiline-blocks": "error",
    "jsdoc/no-multi-asterisks": "warn",
    "jsdoc/no-types": isTypescript ? "error" : "off",
    "jsdoc/require-jsdoc": "off",
    "jsdoc/require-param": "off",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/require-returns-type": "off",
    "jsdoc/require-yields": "off",
  };
}
