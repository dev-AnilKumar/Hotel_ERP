const ConferenceModel = require("../models/ConferenceModel");


const createConferenceRoom = async (req, res) => {
    try {
        const conferenceRoom = await ConferenceModel.create(req.body);
        res.json({ conferenceRoom, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getConferenceRooms = async (req, res) => {
    try {
        const conferenceRooms = await ConferenceModel.find();
        res.json({ conferenceRooms, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getConferenceRoomById = async (req, res) => {
    const { id } = req.params;
    try {
        const conferenceRoom = await ConferenceModel.findById(id);
        if (conferenceRoom) {
            res.json({ conferenceRoom, success: true });
        } else {
            throw new Error("Conference Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const updateConferenceRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const conferenceRoom = await ConferenceModel.findById(id);
        if (conferenceRoom) {
            const updatedconferenceRoom = await ConferenceModel.findByIdAndUpdate(id, req.body);
            res.json({ updatedconferenceRoom, success: true });
        } else {
            throw new Error("Conference Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const deleteConferenceRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const conferenceRoom = await ConferenceModel.findById(id);
        if (conferenceRoom) {
            await ConferenceModel.findByIdAndDelete(id);
            res.json({ msg: "Conference Room Successfully Deleted", success: true });
        } else {
            throw new Error("Conference Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { createConferenceRoom, getConferenceRoomById, getConferenceRooms, updateConferenceRoom, deleteConferenceRoom }