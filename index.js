module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    ...[
      './rules/base',
      './rules/import',
      './rules/babel',
      './rules/lodash-fp',
    ].map(require.resolve),
  ],
}
