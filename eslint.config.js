import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['node_modules', 'coverage', '.turbo', '*.min.js']),
  
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs['recommended-latest'], 
      reactHooks.configs['recommended-latest'], 
      reactRefresh.configs.vite, 
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect', 
      },
    },
    rules: {
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true, 
        varsIgnorePattern: '^[A-Z_]', 
        argsIgnorePattern: '^_', 
      }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
])