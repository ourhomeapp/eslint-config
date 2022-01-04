module.exports = {
  settings: { react: { version: 'detect' } },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
