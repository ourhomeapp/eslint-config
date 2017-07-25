const { ERROR, WARN, OFF } = require('./constants')

module.exports = {
  rules: {
    complexity: [WARN, 10],
    'no-console': OFF,
    'no-await-in-loop': [ERROR],
    'no-use-before-define': [ERROR, 'nofunc'],
    'no-underscore-dangle': [WARN],
    'max-nested-callbacks': [WARN, 5],
    'no-restricted-globals': [
      ERROR,
      ...[
        'self',
        'find',
        'event',
        'isNaN',
        'isFinite',
      ],
    ],
  },
}
