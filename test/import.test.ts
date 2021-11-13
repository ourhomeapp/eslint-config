import test from 'ava';

import { executeOnFiles, getRuleResults } from './util';

test('Warn on incorrect import order', async (t) => {
  const [output] = await executeOnFiles(['./test/samples/import.ts']);
  const warnings = getRuleResults(output, /^import\/order$/, [1]);

  t.is(warnings.length, 1);
  t.is(warnings.length, output.warningCount);
  t.is(output.errorCount, 0);
});
