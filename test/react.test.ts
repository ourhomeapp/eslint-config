import test from 'ava';

import { executeOnFiles, getRuleResults } from './util';

test('Error if jsx in unsupported file type', async (t) => {
  const [output] = await executeOnFiles([
    './test/samples/reactJsxFilenameExtension.js',
  ]);
  const errors = getRuleResults(
    output,
    /^react\/(display-name|jsx-filename-extension)$/,
  );

  t.is(errors.length, 2);
  t.is(errors.length, output.errorCount);
  t.is(output.warningCount, 0);
});
