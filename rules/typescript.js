const { rules: baseRules } = require('./base');

const baseNoUnusedVarsOptions = baseRules['no-unused-vars'][1];
const baseNoUseBeforeDefineOptions = baseRules['no-use-before-define'][1];

module.exports = {
  overrides: [
    {
      files: ['*.{js,jsx}'],
      parser: '@babel/eslint-parser',
    },
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            ignoreTypeValueShadow: false,
            ignoreFunctionTypeParameterNameValueShadow: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { ...baseNoUnusedVarsOptions },
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
