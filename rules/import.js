module.exports = {
  extends: [
    'plugin:import/recommended',
    ...['eslint-config-airbnb-base/rules/imports'].map(require.resolve),
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      extends: ['plugin:import/typescript'],
    },
    {
      files: ['src/**/*'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: false },
        ],
      },
    },
    {
      files: ['*.{test,spec}.*', '**/__{mocks,tests,fixtures}__/**/*'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
