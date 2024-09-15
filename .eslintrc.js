module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType:'module',
  },
  rules: {
    // 'off', 'warn', 'error'
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': 'off',
    'camelcase': ['error', { 'properties': 'never' }],
  },
};
