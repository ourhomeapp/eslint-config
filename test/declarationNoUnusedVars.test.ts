import test from 'ava';

import { executeOnFiles } from './util';

test('No false positives on declaration files', async (t) => {
  const [output] = await executeOnFiles([
    './test/samples/declarationNoUnusedVars.d.ts',
  ]);

  t.is(output.messages.length, 0);
});
