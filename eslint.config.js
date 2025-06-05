import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'

export default tseslint.config(
  { ignores: ['dist', '.astro'] },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // or .recommended for less strictness
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Disable rules that may conflict with Astro or are too strict
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    },
  },
  { // Astro-specific overrides if needed
    files: ['**/*.astro'],
    // rules: { ... }
  }
)
