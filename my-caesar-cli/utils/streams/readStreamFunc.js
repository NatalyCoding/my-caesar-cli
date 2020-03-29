const stream = require('stream');
const fs = require('fs');

function readStreamFunc(input) {
    if (fs.existsSync(input)) {
        return fs.createReadStream(input, 'utf8');
    } else if (!input) {
        process.stdout.write('Enter some text...\n');
        return process.stdin;
    }
    throw new Error('Input file not found');
}

module.exports = { readStreamFunc };