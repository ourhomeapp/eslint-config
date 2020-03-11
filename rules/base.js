module.exports = {
  rules: {
    'complexity': ['warn', 10],
    'max-nested-callbacks': ['warn', 5],
    'no-restricted-globals': [
      'error',
      ...['self', 'find', 'event', 'isNaN', 'isFinite'],
    ],
  },
};
