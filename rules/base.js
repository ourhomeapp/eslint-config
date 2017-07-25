const { ERROR, WARN } = require('./constants')

module.exports = {
  rules: {
    complexity: [WARN, 10],
    'max-nested-callbacks': [WARN, 5],
    'no-restricted-globals': [
      ERROR,
      ...['self', 'find', 'event', 'isNaN', 'isFinite'],
    ],
  },
}
