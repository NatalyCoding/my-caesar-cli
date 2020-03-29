const { program } = require('commander');

program
    .storeOptionsAsProperties(false)
    .option('-a, --action <action>', 'an action encode/decode')
    .option('-s, --shift <shift>', 'a shift')
    .option('-i, --input <input>', 'an input file')
    .option('-o, --output <output>', 'an output file')
    .parse(process.argv);

const programOptions = program.opts();

module.exports = { programOptions };