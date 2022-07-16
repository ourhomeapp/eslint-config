import { executeOnFile, getRuleResults } from './util';

test('Error on void in non-statements', async () => {
  const output = await executeOnFile('./test/samples/noVoid.ts');
  const errors = getRuleResults(output, 'no-void');

  expect(errors).toHaveLength(2);
  expect(errors).toHaveLength(output.errorCount);
  expect(output.warningCount).toBe(0);
});
