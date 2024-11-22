const RoomBookingModel = require("../models/RoomBookingModel");
const RoomModel = require("../models/RoomModel");
const UserModel = require("../models/UserModel");
const stripe = require('stripe')(process.env.STRIPE_SERVER_SECRET_KEY);

const createRoomBooking = async (req, res) => {
    const { room } = req.body;
    try {
        const roomDetails = await RoomModel.findById(room.roomId);
        if (!roomDetails) throw new Error("Room Not Found");
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: room.price,
                    quantity: room.days,
                    image: room.image,
                    name: room.name
                },
            ],
            mode: 'payment',
            // success_url: `${YOUR_DOMAIN}?success=true`,
            // cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });
        console.log(session)
        const room = await RoomBookingModel.create({ ...req.body, guestId: userId, roomId: roomDetails._id });
        res.json({ room, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getRoomBookings = async (req, res) => {
    try {
        const roombookings = await RoomBookingModel.find();
        res.json({ roombookings, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getBookingsofSingleRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await RoomModel.findById(id);
        if (!room) throw new Error("Room Not Found");

        const bookings = await RoomBookingModel.find({ roomId: room._id });
        res.json({ bookings, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getRoomBookingsofUser = async (req, res) => {
    const { _id } = req.user;
    try {
        const bookings = await RoomBookingModel.find({ guestId: _id });
        res.json({ bookings, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getRoomBookingById = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await RoomBookingModel.findOne(id);
        if (booking) {
            res.json({ booking, success: true });
        } else {
            throw new Error("Booking Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const updateRoomBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await RoomBookingModel.findById(id);
        if (room) {
            const updatedRoom = await RoomBookingModel.findByIdAndUpdate(id, req.body);
            res.json({ updatedRoom, success: true });
        } else {
            throw new Error("Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const cancelRoomBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const roombooking = await RoomBookingModel.findById(id);
        if (roombooking) {
            roombooking.booking_status = "Cancelled";
            await roombooking.save();
            res.json({ msg: "Booking Sucessfully Cancelled", success: true });
        } else {
            throw new Error("Booking Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const deleteRoomBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const roombooking = await RoomBookingModel.findById(id);
        if (roombooking) {
            await RoomBookingModel.findByIdAndDelete(id);
            res.json({ msg: "Booking Successfully Deleted", success: true });
        } else {
            throw new Error("Booking Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { createRoomBooking, getBookingsofSingleRoom, getRoomBookings, getRoomBookingsofUser, getRoomBookingById, cancelRoomBooking, deleteRoomBooking }