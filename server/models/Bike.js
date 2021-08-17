const { Schema, model } = require('mongoose');
const statusSchema = require('./Status');

const bikeSchema = new Schema(
    {
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        year: {
            type: String
        },
        serial: {
            type: Number,
            unique: true
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

const Bike = model('Bike', bikeSchema);

module.exports = Bike;