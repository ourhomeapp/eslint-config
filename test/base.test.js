const test = require('ava');

const { executeOnFiles } = require('./util');

test('Warn on complexity', t => {
  const output = executeOnFiles(['./test/fixtures/baseComplexity.js']);

  t.is(output.errorCount, 0);
  t.is(output.warningCount, 1);

  const message = output.results[0].messages[0];

  t.is(message.ruleId, 'complexity');
  t.is(message.severity, 1);
});

test('Warn on too many nested callbacks', t => {
  const output = executeOnFiles(['./test/fixtures/baseNestedCallbacks.js']);

  t.is(output.errorCount, 0);
  t.is(output.warningCount, 1);

  const message = output.results[0].messages[0];

  t.is(message.ruleId, 'max-nested-callbacks');
  t.is(message.severity, 1);
});

test('Error on restricted globals', t => {
  const output = executeOnFiles(['./test/fixtures/baseRestrictedGlobals.js']);

  t.is(output.warningCount, 0);

  const { messages } = output.results[0];
  const noRestrictedGlobals = messages.filter(
    ({ ruleId, severity }) =>
      ruleId === 'no-restricted-globals' && severity === 2,
  );

  t.is(noRestrictedGlobals.length, 5);
});
