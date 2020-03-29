const stream = require('stream');
const fs = require('fs');

function writeStreamFunc(output) {
    if (fs.existsSync(output)) {
        return fs.createWriteStream(output, { flags: 'a' });
    } else if (!output) {
        return process.stdout;
    }
    throw new Error('Output file not found');
}

module.exports = { writeStreamFunc };