module.exports = {
  extends: [
    'airbnb',
    ...[
      './rules/base',
      './rules/import',
      './rules/react',
      './rules/react-native',
      './rules/prettier',
    ].map(require.resolve),
  ],

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 8,
  },
}
