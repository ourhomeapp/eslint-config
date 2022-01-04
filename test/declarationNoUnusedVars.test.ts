import { executeOnFiles } from './util';

test('No false positives on declaration files', async () => {
  const [output] = await executeOnFiles([
    './test/samples/declarationNoUnusedVars.d.ts',
  ]);

  expect(output.messages).toHaveLength(0);
});
