const mongoose = require('mongoose'); // Erase if already required

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Restaurant", "Bar"],
        default: "Restaurant",
    },
    tables: {
        type: Number,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        default: [],
    }],
    description: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
})
module.exports = mongoose.model('Restaurant', restaurantSchema)

