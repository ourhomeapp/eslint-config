const { WARN } = require('./constants')

module.exports = {
  plugins: ['prettier'],

  extends: ['prettier', 'prettier/react'],

  rules: {
    'prettier/prettier': WARN,
  },
}
