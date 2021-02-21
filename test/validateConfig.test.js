const test = require('ava');

const { executeOnFiles } = require('./util');

test('Validate config', (t) => {
  const output = executeOnFiles(['./test/fixtures/validateConfig.ts']);

  t.is(output.errorCount, 0);
  t.is(output.warningCount, 0);
});
