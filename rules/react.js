module.exports = {
  settings: { react: { version: 'detect' } },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
  overrides: [
    {
      files: ['*.{tsx,jsx}'],
      plugins: ['react-hooks'],
      extends: ['plugin:react/recommended'],
      rules: {
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
};
