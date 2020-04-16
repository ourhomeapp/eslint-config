const test = require('ava');

const { executeOnFiles } = require('./util');

test('Error if jsx in unsupported file type', (t) => {
  const output = executeOnFiles([
    './test/fixtures/reactJsxFilenameExtension.js',
  ]);

  t.is(output.errorCount, 1);
  t.is(output.warningCount, 0);

  const message = output.results[0].messages[0];

  t.is(message.ruleId, 'react/jsx-filename-extension');
  t.is(message.severity, 2);
});
