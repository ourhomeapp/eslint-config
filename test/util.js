const { CLIEngine } = require('eslint');

const getCli = () => new CLIEngine();

const executeOnText = (input) => getCli().executeOnText([input, '\n'].join(''));

const executeOnFiles = (files) => getCli().executeOnFiles(files);

module.exports = { executeOnText, executeOnFiles };
