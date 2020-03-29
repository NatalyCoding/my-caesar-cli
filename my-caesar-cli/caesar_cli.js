const { programOptions } = require('./utils/commander');
const { readStreamFunc } = require('./utils/streams/readStreamFunc');
const { writeStreamFunc } = require('./utils/streams/writeStreamFunc');
const { transformStreamFunc } = require('./utils/streams/transformStreamFunc');
const { checkInput } = require('./utils/checkInput');
const { pipelineFunc } = require('./utils/pipelineFunc');

checkInput();

const readStream = readStreamFunc(programOptionsFunc.input);
const transformStream = transformStreamFunc(programOptions.shift, programOptions.action);
const writeStream = writeStreamFunc(programOptions.output);

pipelineFunc(readStream, transformStream, writeStream);