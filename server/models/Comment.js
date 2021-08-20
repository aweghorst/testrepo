const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

<<<<<<< HEAD
module.exports = commentSchema;
=======
module.exports = commentSchema;
>>>>>>> c31c68e9b34d6a998537b88c5c0c73269a24076c
