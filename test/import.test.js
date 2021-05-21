const test = require('ava');

const { executeOnFiles } = require('./util');

test('Error on incorrect import order', (t) => {
  const output = executeOnFiles(['./test/fixtures/import.ts']);

  const { messages } = output.results[0];
  const importOrderWarnings = messages.filter(
    ({ ruleId, severity }) => /^import\/order$/.test(ruleId) && severity === 1,
  );

  t.is(importOrderWarnings.length, 1);
});
