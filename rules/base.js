module.exports = {
  env: { node: true, browser: false },
  extends: [
    'eslint:recommended',
    ...[
      'eslint-config-airbnb-base/rules/best-practices',
      'eslint-config-airbnb-base/rules/errors',
      'eslint-config-airbnb-base/rules/es6',
      'eslint-config-airbnb-base/rules/node',
      'eslint-config-airbnb-base/rules/strict',
      'eslint-config-airbnb-base/rules/variables',
    ].map(require.resolve),
  ],
  rules: {
    'camelcase': ['error', { properties: 'never' }],
    'complexity': ['warn', 10],
    'curly': ['error', 'multi-line', 'consistent'],
    'max-nested-callbacks': ['warn', { max: 5 }],
    'no-console': 'off',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '[iI]gnored' },
    ],
  },
  overrides: [
    {
      files: ['src/**/*'],
      env: { node: false, browser: true },
      rules: {
        'no-console': 'error',
      },
    },
    {
      files: ['*.{test,spec}.*', '**/__{mocks,tests,fixtures}__/**/*'],
      env: { node: true, browser: true },
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
