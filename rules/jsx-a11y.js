const { rules: airbnbRules } = require('eslint-config-airbnb/rules/react-a11y');

module.exports = {
  overrides: [
    {
      files: ['*.{tsx,jsx}'],
      extends: ['plugin:jsx-a11y/recommended'],
      rules: airbnbRules,
    },
  ],
};
