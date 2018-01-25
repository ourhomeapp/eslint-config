const { ERROR, WARN, OFF } = require('./constants');

module.exports = {
  plugins: ['import'],

  rules: {
    'import/first': OFF,
    'import/no-unresolved': [ERROR, { commonjs: true, amd: true }],
    'import/named': ERROR,
    'import/namespace': ERROR,
    'import/default': ERROR,
    'import/export': ERROR,
    'import/prefer-default-export': OFF,
    'import/order': [
      WARN,
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
  },
};
