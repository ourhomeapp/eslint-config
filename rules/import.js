const { ERROR, OFF } = require('./constants')

module.exports = {
  plugins: ['import'],

  settings: {
    'import/ignore': [
      'node_modules',
      /\.(scss|less|css|coffee|svg|gif|png|jpg)$/,
    ],
    'import/core-modules': ['react-native'],
  },

  rules: {
    'import/first': OFF,
    'import/no-unresolved': [ERROR, { commonjs: false, amd: true }],
    'import/named': ERROR,
    'import/namespace': ERROR,
    'import/default': ERROR,
    'import/export': ERROR,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
        optionalDependencies: true,
      },
    ],
  },
}
