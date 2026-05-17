import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import obsidianmd from 'eslint-plugin-obsidianmd';
import globals from 'globals';

export default tseslint.config(
	{
        ignores: [
			'node_modules/**',
			'dist/**',
		],
        linterOptions: {
            reportUnusedDisableDirectives: 'error'
        }
    },
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...obsidianmd.configs.recommended,
	 {
        files: ['src/**/*.{ts,tsx}'],
        ignores: [
			'src/tools/**',
        ],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                project: './tsconfig.json'
            }
        },
        plugins: {
            obsidianmd: obsidianmd
        },
        rules: {
            
        }
	}
);