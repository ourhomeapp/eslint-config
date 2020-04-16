const { rules: airbnbRules } = require('eslint-config-airbnb/rules/react-a11y');

module.exports = {
  overrides: [
    {
      files: ['*.{tsx,jsx}'],
      plugins: ['jsx-a11y'],
      extends: ['plugin:jsx-a11y/recommended'],
      rules: airbnbRules,
    },
  ],
};
