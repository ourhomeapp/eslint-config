import { executeOnFile } from './util';

test('No false positives on declaration files', async () => {
  const output = await executeOnFile(
    './test/samples/declarationNoUnusedVars.d.ts',
  );

  expect(output.messages).toHaveLength(0);
});
