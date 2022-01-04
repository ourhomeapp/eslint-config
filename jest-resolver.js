// see https://github.com/typescript-eslint/typescript-eslint/issues/4210#issuecomment-981203332
// temporary workaround while we wait for https://github.com/facebook/jest/issues/9771
const enhancedResolve = require('enhanced-resolve');

const resolver = enhancedResolve.create.sync({
  conditionNames: ['require', 'node', 'default'],
  extensions: ['.ts', '.js', '.json'],
  mainFields: ['exports', 'main', 'require'],
});

const jestResolver = (request, options) => resolver(options.basedir, request);

module.exports = jestResolver;
