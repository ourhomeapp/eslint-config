module.exports = {
  overrides: [
    {
      files: ['*.{test,spec}.*', '**/__{mocks,tests,fixtures}__/**/*'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: { 'jest': true, 'jest/globals': true },
    },
  ],
};
