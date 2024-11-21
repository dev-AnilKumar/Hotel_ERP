const RoomModel = require("../models/RoomModel");


const createRoom = async (req, res) => {
    try {
        const room = await RoomModel.create(req.body);
        res.json({ room, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getRooms = async (req, res) => {
    try {
        const rooms = await RoomModel.find();
        res.json({ rooms, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getRoomById = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await RoomModel.findById(id);
        if (room) {
            res.json({ room, success: true });
        } else {
            throw new Error("Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const updateRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await RoomModel.findById(id);
        if (room) {
            const updatedRoom = await RoomModel.findByIdAndUpdate(id, req.body);
            res.json({ updatedRoom, success: true });
        } else {
            throw new Error("Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const deleteRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await RoomModel.findById(id);
        if (room) {
            await RoomModel.findByIdAndDelete(id);
            res.json({ msg: "Room Successfully Deleted", success: true });
        } else {
            throw new Error("Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { createRoom, getRoomById, getRooms, updateRoom, deleteRoom }