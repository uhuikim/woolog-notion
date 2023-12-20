module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'next/core-web-vitals',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
	},
};