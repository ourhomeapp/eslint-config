import { executeOnFile, getRuleResults } from './util';

test('Enforces dot notation, except for noPropertyAccessFromIndexSignature', async () => {
  const output = await executeOnFile('./test/samples/dotNotation.ts');
  const errors = getRuleResults(output, '@typescript-eslint/dot-notation');

  expect(errors).toHaveLength(1);
  expect(errors).toHaveLength(output.errorCount);
  expect(output.warningCount).toBe(0);
});
