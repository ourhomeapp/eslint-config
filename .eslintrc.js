module.exports = {
  extends: ['./index.js'],

  env: {
    node: true,
    browser: false,
  },

  // you need to specify this in consuming projects
  overrides: [
    { files: ['*.{ts,tsx}'], parserOptions: { project: './tsconfig.json' } },
  ],
};
