import test from 'ava';

import { executeOnFiles, getRuleResults } from './util';

test('Error on void in non-statements', async (t) => {
  const [output] = await executeOnFiles(['./test/samples/noVoid.ts']);
  const errors = getRuleResults(output, 'no-void');

  t.is(errors.length, 2);
  t.is(errors.length, output.errorCount);
  t.is(output.warningCount, 0);
});
