const test = require('ava');

const { executeOnFiles } = require('./util');

test('Error if jsx in unsupported file type', (t) => {
  const output = executeOnFiles([
    './test/fixtures/reactJsxFilenameExtension.js',
  ]);

  t.is(output.errorCount, 2);
  t.is(output.warningCount, 0);

  const messages = [...output.results[0].messages].sort((a, b) => {
    if (a.ruleId === b.ruleId) return 0;

    return a.ruleId > b.ruleId ? 1 : -1;
  });

  t.is(messages.length, 2);
  t.true(messages.every(({ severity }) => severity === 2));
  t.is(messages[0].ruleId, 'react/display-name');
  t.is(messages[1].ruleId, 'react/jsx-filename-extension');
});
