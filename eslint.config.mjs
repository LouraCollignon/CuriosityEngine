import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // 1. Tell ESLint to ignore build artifacts and auto-generated types
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
  },

  // 2. Load standard ESLint & Astro rules
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],

  // 3. Your custom project rules
  {
    files: ['**/*.js', '**/*.ts', '**/*.astro'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
];
