module.exports = {
  extends: ['./index.js'],
  env: { node: true, browser: false },
  parserOptions: { ecmaVersion: 'latest' },
  settings: { react: { version: '18' } },
  overrides: [
    { files: ['*.{ts,tsx}'], parserOptions: { project: './tsconfig.json' } },
    {
      files: ['*.{test,spec}.*', '**/__{mocks,tests,fixtures}__/**/*'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: { 'jest': true, 'jest/globals': true },
    },
  ],
};
