module.exports = {
  extends: ['./index.js'],
  env: { node: true, browser: false },
  overrides: [
    {
      files: ['*.{js,jsx}'],
      parser: '@babel/eslint-parser',
    },
    { files: ['*.{ts,tsx}'], parserOptions: { project: './tsconfig.json' } },
    {
      files: ['*.{test,spec}.*', '**/__{mocks,tests,fixtures}__/**/*'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: { 'jest': true, 'jest/globals': true },
    },
  ],
};
