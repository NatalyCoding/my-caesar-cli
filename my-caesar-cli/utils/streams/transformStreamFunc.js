const stream = require('stream');
const fs = require("fs");
const { encrypt } = require('../utils/encrypt');

function funcTransformStream(shift, action) {
    return stream.Transform({
        transform(data, encoding, callback) {
            this.push(
                encrypt(
                    shift,
                    data.toString(),
                    action.toString()
                )
            )
            callback();
        }
    })
}

module.exports = { funcTransformStream };