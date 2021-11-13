import test from 'ava';

import { executeOnFiles, getRuleResults } from './util';

test('Warn on complexity', async (t) => {
  const [output] = await executeOnFiles(['./test/samples/baseComplexity.js']);
  const warnings = getRuleResults(output, 'complexity', [1]);

  t.is(warnings.length, 1);
  t.is(warnings.length, output.warningCount);
  t.is(output.errorCount, 0);
});

test('Warn on too many nested callbacks', async (t) => {
  const [output] = await executeOnFiles([
    './test/samples/baseNestedCallbacks.js',
  ]);
  const warnings = getRuleResults(output, 'max-nested-callbacks', [1]);

  t.is(warnings.length, 1);
  t.is(warnings.length, output.warningCount);
  t.is(output.errorCount, 0);
});

test('Error on restricted globals', async (t) => {
  const [output] = await executeOnFiles([
    './test/samples/baseRestrictedGlobals.js',
  ]);
  const errors = getRuleResults(output, 'no-restricted-globals');

  t.is(errors.length, 5);
  t.is(output.warningCount, 0);
});
