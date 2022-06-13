// @ts-check

/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  testMatch: ['**/test/**/*.test.ts'],
  transform: { '^.+\\.(t|j)sx?$': '@swc-node/jest' },
  testEnvironment: 'node',
};

module.exports = config;
