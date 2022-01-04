import { executeOnFiles, getRuleResults } from './util';

test('Error if jsx in unsupported file type', async () => {
  const [output] = await executeOnFiles([
    './test/samples/reactJsxFilenameExtension.js',
  ]);
  const errors = getRuleResults(
    output,
    /^react\/(display-name|jsx-filename-extension)$/,
  );

  expect(errors).toHaveLength(2);
  expect(errors).toHaveLength(output.errorCount);
  expect(output.warningCount).toBe(0);
});

test('Error if components not arrow functions', async () => {
  const [output] = await executeOnFiles([
    './test/samples/reactFunctionComponentDefinition.tsx',
  ]);
  const errors = getRuleResults(
    output,
    /^react\/(function-component-definition)$/,
  );

  expect(errors).toHaveLength(2);
  expect(errors).toHaveLength(output.errorCount);
  expect(output.warningCount).toBe(0);
});
