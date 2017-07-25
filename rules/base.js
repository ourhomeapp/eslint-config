const { ERROR, WARN, OFF } = require('./constants')

module.exports = {
  rules: {
    semi: [ERROR, 'never'],
    complexity: [WARN, 10],
    'no-console': OFF,
    'no-await-in-loop': [ERROR],
    'arrow-parens': [ERROR, 'as-needed'],
    'no-use-before-define': [ERROR, 'nofunc'],
    'no-underscore-dangle': [WARN],
    'max-nested-callbacks': [WARN, 5],
    'max-len': [
      WARN,
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'generator-star-spacing': [ERROR, { before: true, after: true }],
    'no-restricted-globals': ['error', 'find', 'self', 'event'],
  },
}
