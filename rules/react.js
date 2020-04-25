module.exports = {
  settings: { react: { version: 'detect' } },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.{tsx,jsx}'],
      extends: ['plugin:react/recommended'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
