const test = require('ava');

const { executeOnFiles } = require('./util');

test('Error on void in non-statements', (t) => {
  const output = executeOnFiles(['./test/fixtures/noVoid.ts']);

  const { messages } = output.results[0];
  const noVoid = messages.filter(
    ({ ruleId, severity }) => ruleId === 'no-void' && severity === 2,
  );

  t.is(noVoid.length, 2);
});
