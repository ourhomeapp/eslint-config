module.exports = {
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      extends: ['prettier/@typescript-eslint'],
    },
    {
      files: ['*.{jsx,tsx}'],
      extends: ['prettier/react'],
    },
  ],
};
