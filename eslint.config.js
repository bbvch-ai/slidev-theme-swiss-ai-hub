import eslint from '@eslint/js'
import unocssPlugin from '@unocss/eslint-plugin'
import gitignore from 'eslint-config-flat-gitignore'
import importPlugin from 'eslint-plugin-import'
import sonarPlugin from 'eslint-plugin-sonarjs'
import vuePlugin from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default [
  gitignore(),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.typescript,
  sonarPlugin.configs.recommended,
  {
    plugins: {
      '@unocss': unocssPlugin,
    },
    rules: {
      '@unocss/order': 'warn', // Enforce class order
      '@unocss/order-attributify': 'warn', // If using attributify mode
    },
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      'vue/no-multiple-template-root': 'off', // Allow multiple root elements (Vue 3)
      'vue/multi-word-component-names': 'off', // Slidev themes often use single-word names
    },
  },
  {
    files: ['*.ts', '**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      // TypeScript specific rules (optional adjustments)
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],

      // Basic import sorting
      'import/order': ['error', {
        'groups': [
          'builtin', // Node.js built-in modules
          'external', // npm packages
          'internal', // Paths defined in settings.import.resolver
          'parent', // Imports from parent directory
          'sibling', // Imports from sibling directories
          'index', // Imports from same directory
          'object', // Object imports
          'type', // Type imports
        ],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      }],
    },
  },
]
