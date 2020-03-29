const { pipeline } = require('stream');

function pipelineFunc(readStream, transformStream, writeStream) {
    pipeline(
        readStream,
        transformStream,
        writeStream,
        err => {
            if (err) {
                throw new Error('Failed');
            }
        });
}

module.exports = { pipelineFunc };