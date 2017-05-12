module.exports = {
  rules: {
    semi: ['error', 'never'],
    complexity: ['warn', 10],
    /*
      Disallow function comma dangle at root since node does not support it
      natively. Override this rule with a nested eslintrc for directories where
      code is transpiled.
    */
    'comma-dangle': ['error', {
      functions: 'never',
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
    }],
    'no-console': 'off',
    'no-await-in-loop': ['error'],
    'arrow-parens': ['error', 'as-needed'],
    'no-use-before-define': ['error', 'nofunc'],
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'no-underscore-dangle': ['warn'],
    'max-nested-callbacks': ['warn', 5],
    'max-len': ['warn', {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'generator-star-spacing': ['error', { before: true, after: true }],
    'no-restricted-globals': [
      'error',
      'find',
      'self',
      'event',
    ],
  },
}
