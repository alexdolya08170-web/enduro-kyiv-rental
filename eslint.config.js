import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Игнорируем не нужные для линтинга директории
  globalIgnores(['node_modules', 'coverage', '.turbo', '*.min.js']),
  
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs['recommended-latest'], // Базовые правила React/JSX
      reactHooks.configs['recommended-latest'], // Правила хуков
      reactRefresh.configs.vite, // Интеграция с Vite HMR
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
        version: 'detect', // Автоматически определяет версию React из package.json
      },
    },
    rules: {
      // Улучшенная настройка неиспользуемых переменных
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true, // Игнорировать переменные из rest-деструктуризации
        varsIgnorePattern: '^[A-Z_]', // Компоненты и константы
        argsIgnorePattern: '^_', // Аргументы, начинающиеся с `_`
      }],
      
      // Отключаем устаревшие правила (не нужны в React 17+)
      'react/prop-types': 'off', // Отключите, если не используете propTypes
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      
      // Дополнительные полезные правила (опционально)
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
])