const airBnbBaseRules = require('eslint-config-airbnb-base/rules/style');

const [airBnbNoRestrictedSyntaxLevel, ...airBnbNoRestrictedSyntaxOptions] =
  airBnbBaseRules.rules['no-restricted-syntax'];

module.exports = {
  env: { node: true, browser: false },
  extends: ['eslint:recommended', 'eslint-config-airbnb'],
  rules: {
    'camelcase': ['error', { properties: 'never' }],
    'complexity': ['warn', 10],
    'max-nested-callbacks': ['warn', { max: 5 }],
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allowFunctionParams: true }],
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false },
    ],
    'no-void': ['error', { allowAsStatement: true }],
    'no-restricted-syntax': [
      airBnbNoRestrictedSyntaxLevel,
      ...airBnbNoRestrictedSyntaxOptions.filter(
        ({ selector } = {}) => !/forofstatement/i.test(selector ?? ''),
      ),
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
