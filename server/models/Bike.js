const mongoose = require('mongoose');

const { Schema } = mongoose;
const statusSchema = require('./Status');

const bikeSchema = new Schema(
    {
        brand: {
            type: String,
            required: true
        },
        bike_model: {
            type: String,
            required: true
        },
        year: {
            type: String
        },
        serial: {
            type: String
        },
        description: {
            type: String,
            required: true,
            minLength: 1
        },
        image: {
            type: String,
            required: true
        },
        status: [statusSchema]
    }
);

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;