const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var roomBookingSchema = new mongoose.Schema({
    guestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    roomId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
    },
    numberofGuests: {
        type: Number,
    },
    check_in_date: {
        type: Date,
        required: true,
    },
    check_out_date: {
        type: Date,
        required: true,
    },
    booking_status: {
        type: String,
        enum: ["Confirmed", "Cancelled"],
        default:"Confirmed",
    },
    paymentMode:{
        type: String,
        enum: ["Cash", "Stripe","Razorpay"],
    },
    transactionId: {
        type: String,
    },
    totalPrice:{
        type:Number,
    },
},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('RoomBooking', roomBookingSchema);



// const availableRooms = db.room_availability.find({
//     date: ISODate("2024-11-25T00:00:00Z"),
// date: { $gte: ISODate("2024-11-25T00:00:00Z"), $lte: ISODate("2024-11-27T00:00:00Z") }
//     is_available: true
//   }).toArray();
  
//   const roomIds = availableRooms.map(room => room.room_id);
  
//   const roomDetails = db.rooms.find({
//     _id: { $in: roomIds },
//     room_type: "Suite" // Filter rooms by type "Suite"
//   }).toArray();
  
//   // Combine the results
//   const roomsWithAvailability = availableRooms.map(availability => {
//     const roomDetail = roomDetails.find(room => room._id.equals(availability.room_id));
//     if (roomDetail) {  // Only add available "Suite" rooms
//       return {
//         room_id: roomDetail._id,
//         room_number: roomDetail.room_number,
//         room_type: roomDetail.room_type,
//         price_per_night: roomDetail.price_per_night,
//         capacity: roomDetail.capacity,
//         amenities: roomDetail.amenities,
//         date: availability.date,
//         is_available: availability.is_available
//       };
//     }
//   }).filter(room => room !== undefined);
  
//   console.log(roomsWithAvailability);
  

// Mark the room as unavailable for the booked dates
// db.room_availability.updateMany(
//     { 
//       room_id: ObjectId("roomid101"),
//       date: { $gte: ISODate("2024-11-25T00:00:00Z"), $lte: ISODate("2024-11-27T00:00:00Z") }
//     },
//     { $set: { is_available: false, updated_at: new Date() } }
//   )
  

// Update booking status to "Cancelled"
// db.bookings.updateOne(
//     { _id: ObjectId("booking123") },
//     { $set: { booking_status: "Cancelled", updated_at: new Date() } }
//   )
  

// Mark the room as available again for the canceled dates
// db.room_availability.updateMany(
//     { 
//       room_id: ObjectId("roomid101"),
//       date: { $gte: ISODate("2024-11-25T00:00:00Z"), $lte: ISODate("2024-11-27T00:00:00Z") }
//     },
//     { $set: { is_available: true, updated_at: new Date() } }
//   )
  




// 5. Room Availability Collection

// {
//     "_id": ObjectId,              // Unique ID for the availability record
//     "room_id": ObjectId,          // Reference to the room in the 'rooms' collection
//     "date": Date,                 // The specific date for availability tracking (e.g., "2024-11-25")
//     "is_available": Boolean,      // Availability status (true = available, false = not available)
//     "created_at": Date,           // Timestamp when the availability record was created
//     "updated_at": Date            // Timestamp when the availability record was last updated
//   }
  