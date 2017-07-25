const test = require('tape')
const { stripIndent } = require('common-tags')
const { CLIEngine } = require('eslint')

test('Validate config', t => {
  const cli = new CLIEngine({ useEslintrc: false, configFile: 'index.js' })
  const output = cli.executeOnText(
    [
      stripIndent`
        const foo = 1
        const bar = 2
        ;[1, 2, 3].map(n => n * foo + bar)
      `,
      '\n',
    ].join(''),
  )

  t.equal(output.errorCount, 0)
  t.equal(output.warningCount, 0)
  t.end()
})
