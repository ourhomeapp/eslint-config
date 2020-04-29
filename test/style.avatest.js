const test = require('ava');

const { executeOnFiles } = require('./util');

test('Error on curly braces', (t) => {
  const output = executeOnFiles(['./test/fixtures/curly.js']);

  const { messages } = output.results[0];
  const curly = messages.filter(
    ({ ruleId, severity }) => ruleId === 'curly' && severity === 1,
  );

  t.is(curly.length, 5);
});
