module.exports = {
  extends: [
    'airbnb',
    ...[
      './rules/base',
      './rules/import',
      './rules/prettier',
    ].map(require.resolve),
  ],
}
