import { executeOnFile, getRuleResults } from './util';

test('Warn on complexity', async () => {
  const output = await executeOnFile('./test/samples/baseComplexity.js');
  const warnings = getRuleResults(output, 'complexity', [1]);

  expect(warnings).toHaveLength(1);
  expect(warnings).toHaveLength(output.warningCount);
  expect(output.errorCount).toBe(0);
});

test('Warn on too many nested callbacks', async () => {
  const output = await executeOnFile('./test/samples/baseNestedCallbacks.js');
  const warnings = getRuleResults(output, 'max-nested-callbacks', [1]);

  expect(warnings).toHaveLength(1);
  expect(warnings).toHaveLength(output.warningCount);
  expect(output.errorCount).toBe(0);
});

test('Error on restricted globals', async () => {
  const output = await executeOnFile('./test/samples/baseRestrictedGlobals.js');
  const errors = getRuleResults(output, 'no-restricted-globals');

  expect(errors).toHaveLength(5);
  expect(output.warningCount).toBe(0);
});
