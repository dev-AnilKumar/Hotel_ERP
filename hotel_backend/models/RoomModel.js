const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Deluxe", "Non-Deluxe", "Suite", "Family"],
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
    }],
    
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Room', RoomSchema);

// const room = await HotelRoom.findOne({
//     roomNumber,
//     'bookings.checkInDate': { $gte: currentDate } // Check if the booking is today or in the future
//   });

//   if (!room) {
//     console.log('Room not found.');
//     return;
//   }

//   const futureBookings = room.bookings.filter(booking => booking.checkInDate >= currentDate);
//   console.log('Current and future bookings:', futureBookings);
// }