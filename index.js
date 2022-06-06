module.exports = {
  extends: [
    './rules/base',
    './rules/typescript',
    './rules/import',
    './rules/react',
    './rules/jsx-a11y',
    './rules/prettier',
    './rules/style',
  ].map(require.resolve),
};
