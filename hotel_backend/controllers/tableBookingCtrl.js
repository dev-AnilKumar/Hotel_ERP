const RestaurantModel = require("../models/RestaurantModel");
const TableBookingModel = require("../models/TableBookingModel");

const createTableBooking = async (req, res) => {
    const { _id } = req.user;
    const { resturantId } = req.body;
    try {
        const restaurant = await RestaurantModel.findById(id);
        if (!restaurant) throw new Error("Restaurant Not Found");

        const tableBooking = await TableBookingModel.create({ ...req.body, userId: _id });
        res.json({ tableBooking, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getTableBookings = async (req, res) => {
    try {
        const tablebookings = await TableBookingModel.find();
        res.json({ tablebookings, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getBookingsofSingleRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await RestaurantModel.findById(id);
        if (!restaurant) throw new Error("Restaurant Not Found");

        const tablebookings = await TableBookingModel.find({ restaurantId: restaurant._id });
        res.json({ tablebookings, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getTableBookingsofUser = async (req, res) => {
    const { _id } = req.user;
    try {
        const tablebookings = await TableBookingModel.find({ userId: _id });
        res.json({ tablebookings, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getTableBookingById = async (req, res) => {
    const { id } = req.params;
    try {
        const tablebooking = await TableBookingModel.findOne(id);
        if (tablebooking) {
            res.json({ tablebooking, success: true });
        } else {
            throw new Error("Table Booking Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const updateTableBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const tableBooking = await TableBookingModel.findById(id);
        if (tableBooking) {
            const updatedTableBooking = await TableBookingModel.findByIdAndUpdate(id, req.body);
            res.json({ updatedTableBooking, success: true });
        } else {
            throw new Error("Table Booking Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const cancelTableBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const tablebooking = await TableBookingModel.findById(id);
        if (tablebooking) {
            tablebooking.status = "Cancelled";
            await tablebooking.save();
            res.json({ msg: "Table Booking Sucessfully Cancelled", success: true });
        } else {
            throw new Error("Table Booking Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const deleteTableBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const tablebooking = await TableBookingModel.findById(id);
        if (tablebooking) {
            await TableBookingModel.findByIdAndDelete(id);
            res.json({ msg: "Table Booking Successfully Deleted", success: true });
        } else {
            throw new Error("Table Booking Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { createTableBooking, getBookingsofSingleRestaurant, getTableBookings, getTableBookingsofUser, getTableBookingById, cancelTableBooking, deleteTableBooking, updateTableBooking }