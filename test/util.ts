import { ESLint } from 'eslint';

import type { Linter } from 'eslint';

export const executeOnFile = async (file: string) => {
  const [result] = await getLinter().lintFiles([file]);

  assertResult(result);

  return result;
};

export const getRuleResults = (
  { messages }: ESLint.LintResult,
  matcher: string | RegExp,
  severities: Linter.Severity[] = [2],
) =>
  messages.filter(
    ({ ruleId, severity }) =>
      severities.includes(severity) &&
      (matcher instanceof RegExp
        ? matcher.test(ruleId ?? '')
        : matcher === ruleId),
  );

let linter: ESLint;

const getLinter = () => {
  linter ??= new ESLint();

  return linter;
};

export function assertResult(
  result: unknown,
): asserts result is ESLint.LintResult {
  if (!Array.isArray((result as ESLint.LintResult | undefined)?.messages)) {
    throw new Error('Not an ESLint result');
  }
}
