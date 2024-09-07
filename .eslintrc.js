module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
  },
};
