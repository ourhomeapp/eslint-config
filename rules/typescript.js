const baseRules = require('./base');

const baseNoUseBeforeDefineOptions = baseRules.rules['no-use-before-define'][1];

module.exports = {
  overrides: [
    {
      files: ['*.{js,jsx}'],
      parser: 'babel-eslint',
    },
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            ignoreTypeValueShadow: false,
            ignoreFunctionTypeParameterNameValueShadow: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '[iI]gnored' },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { ...baseNoUseBeforeDefineOptions, ignoreTypeReferences: true },
        ],
      },
    },
    {
      files: ['*.{test,spec}.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
