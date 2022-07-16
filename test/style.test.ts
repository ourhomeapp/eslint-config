import { executeOnFile, getRuleResults } from './util';

test('Warn on curly brace violations', async () => {
  const output = await executeOnFile('./test/samples/curly.js');
  const warnings = getRuleResults(output, 'curly', [1]);

  expect(warnings).toHaveLength(5);
  expect(warnings).toHaveLength(output.warningCount);
  expect(output.errorCount).toBe(0);
});
