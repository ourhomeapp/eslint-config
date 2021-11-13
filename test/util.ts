import { ESLint } from 'eslint';

import type { Linter } from 'eslint';

export const executeOnText = (input: string) =>
  getLinter().lintText([input, '\n'].join(''));

export const executeOnFiles = (files: string | string[]) =>
  getLinter().lintFiles(files);

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
