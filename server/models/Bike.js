const mongoose = require("mongoose");

const { Schema } = mongoose;
const statusSchema = require("./Status");
const commentSchema = require("./Comment");

const bikeSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  bike_model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
  serial: {
    type: Number,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
  },
  image: {
    type: String,
    required: true,
  },
  status: [statusSchema],
  comments: [commentSchema],
});

const Bike = mongoose.model("Bike", bikeSchema);

module.exports = Bike;
