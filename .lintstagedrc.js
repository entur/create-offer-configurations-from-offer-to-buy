const npxPrettierWrite = "npx prettier --write";
const HIDDEN_JS_FILES = ".*.js";
module.exports = {
  "*.{js,ts}": (files) => [
    `xo --fix ${files.join(" ")}`,
    "npx tsc --noEmit",
    // Do not add a test step here; they are run by husky
  ],
  "*.{md,json}": npxPrettierWrite,
  [HIDDEN_JS_FILES]:
    // XO refuses to lint hidden files, so we run prettier on them instead
    npxPrettierWrite,
};
