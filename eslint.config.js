import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
// Note: eslint-plugin-prettier is generally not needed with flat config
// as eslint-config-prettier handles disabling conflicting rules.
// Prettier formatting should be handled by the prettier CLI or editor integration.

export default tseslint.config(
	// Extends eslint:recommended
	eslint.configs.recommended,

	// Extends plugin:@typescript-eslint/recommended
	...tseslint.configs.recommended,

	// Configuration for all .ts files
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true, // Assuming you have tsconfig.json in the root
				ecmaVersion: 2022,
				sourceType: "module",
			},
		},
		rules: {
			// Add specific TypeScript rules here
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_|" },
			],
			"@typescript-eslint/no-explicit-any": "warn",
			// You might need rules for Node.js environment if not automatically inferred
		},
	},

	// Apply Prettier recommended config (disables conflicting rules)
	// Must be the last configuration object in the array
	eslintConfigPrettier,

	// Optional: Ignore patterns (can also use .eslintignore)
	{
		ignores: ["node_modules/", "build/", "dist/", ".env"],
	}
);
