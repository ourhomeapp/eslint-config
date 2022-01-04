import { executeOnFiles, getRuleResults } from './util';

test('Warn on incorrect import order', async () => {
  const [output] = await executeOnFiles(['./test/samples/import.ts']);
  const warnings = getRuleResults(output, /^import\/order$/, [1]);

  expect(warnings).toHaveLength(1);
  expect(warnings).toHaveLength(output.warningCount);
  expect(output.errorCount).toBe(0);
});
