const { ERROR } = require('./constants')

module.exports = {
  plugins: ['react-native'],

  rules: {
    'react-native/no-unused-styles': ERROR,
    'react-native/split-platform-components': ERROR,
    'react-native/no-inline-styles': ERROR,
    'react-native/no-color-literals': ERROR,
  },
}
