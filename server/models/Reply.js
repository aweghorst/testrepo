const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const replySchema = new Schema(
    {
        // replyId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId()
        // },
        username: {
            type: String,
            required: true
        },
        replyBody: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        },
        // id: false
    }
);

module.exports = replySchema;