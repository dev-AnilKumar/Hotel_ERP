const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Deluxe", "Non-Deluxe", "Suite", "Family Room"],
        default: "Non-Deluxe",
    },
    maxCount: {
        type: Number,
        required: true,
    },
    rentPerDay: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    images: [{
        type: String,
        default: [],
    }],
    features: [{
        type: String
    }]
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Room', RoomSchema);