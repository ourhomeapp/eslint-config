import { executeOnFiles } from './util';

test('Validate config', async () => {
  const [output] = await executeOnFiles(['./test/samples/validateConfig.ts']);

  expect(output.errorCount).toBe(0);
  expect(output.warningCount).toBe(0);
});
