import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import obsidianmd from 'eslint-plugin-obsidianmd';
import globals from 'globals';

const pluginFiles = ['src/**/*.ts'];
const cliFiles = ['tools/src/**/*.ts'];
export default tseslint.config(
    { ignores: ['node_modules/**', 'dist/**', 'tools/*.js', 'tools/*.mjs'],
      linterOptions: { reportUnusedDisableDirectives: 'error' } },
    {
        files: pluginFiles,
        extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, ...obsidianmd.configs.recommended.filter(config => config.language !== 'json/json' && !config.files?.includes('package.json'))],
        languageOptions: {
            parser: tseslint.parser,
            globals: globals.browser,
            parserOptions: { project: './tsconfig.json' }
        },
    },
    {
        files: cliFiles,
        extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
        languageOptions: {
            globals: globals.node,
            parserOptions: { project: './tsconfig.json' }
        },
        rules: { '@typescript-eslint/require-await': 'off', '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }] }
    }
);
