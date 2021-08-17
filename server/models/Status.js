const { Schema } = require('mongoose');

const statusSchema = new Schema(
    {
        isLost: {
            type: Boolean,
            default: false
        },
        location: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = statusSchema;