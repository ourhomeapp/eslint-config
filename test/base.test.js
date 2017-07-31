const test = require('ava')
const { stripIndent } = require('common-tags')
const { CLIEngine } = require('eslint')

test('Warn on complexity', t => {
  const cli = new CLIEngine({ useEslintrc: false, configFile: 'index.js' })
  const output = cli.executeOnText(
    [
      stripIndent`
        export const complexFn = n => {
          if (n > 0) return '0'
          if (n > 1) return '1'
          if (n > 2) return '2'
          if (n > 3) return '3'
          if (n > 4) return '4'
          if (n > 5) return '5'
          if (n > 6) return '6'
          if (n > 7) return '7'
          if (n > 8) return '8'
          if (n > 9) return '9'
          return n
        }
      `,
      '\n',
    ].join(''),
  )

  t.is(output.errorCount, 0)
  t.is(output.warningCount, 1)

  const message = output.results[0].messages[0]

  t.is(message.ruleId, 'complexity')
  t.is(message.severity, 1)
})

test('Warn on too many nested callbacks', t => {
  const cli = new CLIEngine({ useEslintrc: false, configFile: 'index.js' })
  const output = cli.executeOnText(
    [
      stripIndent`
        const takesCallback = cb => cb()

        takesCallback(() =>
          takesCallback(() =>
            takesCallback(() =>
              takesCallback(() =>
                takesCallback(() => takesCallback(() => takesCallback())),
              ),
            ),
          ),
        )
      `,
      '\n',
    ].join(''),
  )

  t.is(output.errorCount, 0)
  t.is(output.warningCount, 1)

  const message = output.results[0].messages[0]

  t.is(message.ruleId, 'max-nested-callbacks')
  t.is(message.severity, 1)
})

test('Error on restricted globals', t => {
  const cli = new CLIEngine({ useEslintrc: false, configFile: 'index.js' })
  const output = cli.executeOnText(
    [
      stripIndent`
        export const fn1 = () => self.doSomething()
        export const fn2 = () => find('someid')
        export const fn3 = () => event.something
        export const fn4 = () => isNaN(NaN)
        export const fn5 = () => isFinite(Infinity)
      `,
      '\n',
    ].join(''),
  )

  t.is(output.warningCount, 0)

  const messages = output.results[0].messages
  const noRestrictedGlobals = messages.filter(
    ({ ruleId, severity }) =>
      ruleId === 'no-restricted-globals' && severity === 2,
  )

  t.is(noRestrictedGlobals.length, 5)
})
