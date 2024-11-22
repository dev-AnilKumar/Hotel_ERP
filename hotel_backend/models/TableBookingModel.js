const mongoose = require('mongoose'); // Erase if already required

const tableBookingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true
    },
    // userName: {
    //     type: String,
    //     required: true
    // },
    // restaurantName: {
    //     type: String,
    //     required: true
    // },
    date: {
        type: Date,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    adults: {
        type: Number,
        required: true,
    },
    childrens: {
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Booked", "Cancelled"],
        default: "Booked",
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('TableBooking', tableBookingSchema)