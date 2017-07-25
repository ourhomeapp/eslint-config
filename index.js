module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    ...[
      './rules/base',
      './rules/babel',
      './rules/import',
      './rules/prettier',
    ].map(require.resolve),
    'prettier',
  ],
}
