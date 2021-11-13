import test from 'ava';

import { executeOnFiles, getRuleResults } from './util';

test('Error on incorrect vars ignore patterns', async (t) => {
  const [output] = await executeOnFiles(['./test/samples/noUnusedVars.ts']);
  const errors = getRuleResults(output, /no-unused-vars$/);

  t.is(errors.length, 2);
  t.is(errors.length, output.errorCount);
  t.is(output.warningCount, 0);
});
