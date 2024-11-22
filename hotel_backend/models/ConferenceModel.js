const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var conferenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        default: [],
    }],
    priceperhour: {
        type: Number,
        required: true,
    },
    features: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Conference', conferenceSchema);