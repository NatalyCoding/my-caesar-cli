const { programOptions } = require('./commander');

function checkInput() {
    if (!programOptions.shift) {
        throw new Error('You have to use --shift or -s');
    }
    if (!programOptions.action) {
        throw new Error(
            'Please specify the action -a decode/encode or --action encode/decode'
        );
    }
}

module.exports = { checkInput };