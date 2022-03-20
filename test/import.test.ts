import { executeOnFiles, getRuleResults } from './util';

test('Warn on incorrect import order', async () => {
  const [output] = await executeOnFiles(['./test/samples/import.ts']);
  const errors = getRuleResults(output, /^import\/order$/, [2]);
  const warnings = getRuleResults(output, /^import\/order$/, [1]);

  expect(errors).toHaveLength(0);
  expect(warnings).toHaveLength(1);
});

test('Warn on deprecated import', async () => {
  const [output] = await executeOnFiles(['./test/samples/import.ts']);
  const errors = getRuleResults(output, /^import\/no-deprecated$/, [2]);
  const warnings = getRuleResults(output, /^import\/no-deprecated$/, [1]);

  expect(errors).toHaveLength(0);
  expect(warnings).toHaveLength(1);
});
