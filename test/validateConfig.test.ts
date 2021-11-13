import test from 'ava';

import { executeOnFiles } from './util';

test('Validate config', async (t) => {
  const [output] = await executeOnFiles(['./test/samples/validateConfig.ts']);

  t.is(output.errorCount, 0);
  t.is(output.warningCount, 0);
});
