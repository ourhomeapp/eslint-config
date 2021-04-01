const test = require('ava');

const { executeOnFiles } = require('./util');

test('Error on incorrect vars ignore patterns', (t) => {
  const output = executeOnFiles(['./test/fixtures/noUnusedVars.ts']);

  const { messages } = output.results[0];
  const noUnusedVarsErrors = messages.filter(
    ({ ruleId, severity }) => /no-unused-vars$/.test(ruleId) && severity === 2,
  );

  t.is(noUnusedVarsErrors.length, 2);
});
