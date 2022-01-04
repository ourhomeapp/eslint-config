import { executeOnFiles, getRuleResults } from './util';

test('Error on incorrect vars ignore patterns', async () => {
  const [output] = await executeOnFiles(['./test/samples/noUnusedVars.ts']);
  const errors = getRuleResults(
    output,
    /(no-unused-vars|no-underscore-dangle)$/,
  );

  expect(errors).toHaveLength(3);
  expect(errors).toHaveLength(output.errorCount);
  expect(output.warningCount).toBe(0);
});
