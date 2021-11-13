import test from 'ava';

import { executeOnFiles, getRuleResults } from './util';

test('Warn on curly brace violations', async (t) => {
  const [output] = await executeOnFiles(['./test/samples/curly.js']);
  const warnings = getRuleResults(output, 'curly', [1]);

  t.is(warnings.length, 5);
  t.is(warnings.length, output.warningCount);
  t.is(output.errorCount, 0);
});
