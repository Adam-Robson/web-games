import js from '@eslint/js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js'],
    rules: {
      ...js.configs.recommended.rules,
      semi: 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'new-cap': ['error', { capIsNew: false }],
      'no-redeclare': ['error', { builtinGlobals: true }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'keyword-spacing': ['error', { before: true, after: true }],
      'array-bracket-spacing': 'error',
      'no-unused-vars': 'off',
    },
  },
];
