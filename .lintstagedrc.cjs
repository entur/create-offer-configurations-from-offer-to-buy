/**
 * This file is used for pre-commit formatting.
 * Building and testing is performed by the hooks found in .husky/pre-commit
 */

module.exports = {
	"*.{js,ts,json}": ["rome format --write", "rome check --apply"],
	"*.md": "npx prettier --write",
};
