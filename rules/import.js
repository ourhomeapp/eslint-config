const { ERROR, OFF } = require('./constants')

module.exports = {
  plugins: ['import'],

  rules: {
    'import/first': OFF,
    'import/no-unresolved': [ERROR, { commonjs: false, amd: true }],
    'import/named': ERROR,
    'import/namespace': ERROR,
    'import/default': ERROR,
    'import/export': ERROR,
    'import/prefer-default-export': OFF,
  },
}
