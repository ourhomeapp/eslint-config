const test = require('ava')
const { stripIndent } = require('common-tags')
const { CLIEngine } = require('eslint')

test('Warn on complexity', t => {
  const cli = new CLIEngine({ useEslintrc: false, configFile: 'index.js' })
  const output = cli.executeOnText(
    [
      stripIndent`
        const complexFn = n => {
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

        complexFn(10)
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
        const fn1 = () => self.doSomething()
        const fn2 = () => find('someid')
        const fn3 = () => event.something
        const fn4 = () => isNaN(NaN)
        const fn5 = () => isFinite(Infinity)

        fn1()
        fn2()
        fn3()
        fn4()
        fn5()
      `,
      '\n',
    ].join(''),
  )

  t.is(output.errorCount, 8)
  t.is(output.warningCount, 0)

  const messages = output.results[0].messages
  const noUndef = messages.filter(({ ruleId }) => ruleId === 'no-undef')
  const noRestrictedGlobals = messages.filter(
    ({ ruleId }) => ruleId === 'no-restricted-globals',
  )

  t.is(noUndef.length, 3)
  t.is(noRestrictedGlobals.length, 5)
})
