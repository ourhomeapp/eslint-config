module.exports = {
  plugins: ['import'],

  settings: {
    'import/ignore': [
      'node_modules',
      /\.(scss|less|css|coffee|svg|gif|png|jpg)$/,
    ],
  },

  rules: {
    'import/first': 'off',
    'import/no-unresolved': ['error', { commonjs: false, amd: true }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: true,
    }],
  },
}
