const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var WeddingHallSchema = new mongoose.Schema({
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
    maxCapacity: {
        type: Number,
        required: true,
    },
    images: [{
        type: String,
        default: [],
    }]
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('WeddingHall', WeddingHallSchema);