const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const statusSchema = new Schema(
  {
    isLost: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
          
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = statusSchema;
