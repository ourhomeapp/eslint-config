module.exports = {
  extends: [
    'plugin:import/recommended',
    ...['eslint-config-airbnb-base/rules/imports'].map(require.resolve),
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-deprecated': ['warn'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'warn',
      {
        'alphabetize': { order: 'asc' },
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
        ],
        'newlines-between': 'always',
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
