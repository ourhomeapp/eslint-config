import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testMatch: ['**/test/**/*.test.ts'],
  testEnvironment: 'node',
};

export default config;
