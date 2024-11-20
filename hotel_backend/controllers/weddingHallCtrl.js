const WeddingHallModel = require("../models/WeddingHallModel");


const createWeddingHall = async (req, res) => {
    try {
        const weddingHall = await WeddingHallModel.create(req.body);
        res.json({ weddingHall, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getWeddingHalls = async (req, res) => {
    try {
        const weddinghalls = await WeddingHallModel.find();
        res.json({ weddinghalls, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getWeddingHallById = async (req, res) => {
    const { id } = req.params;
    try {
        const weddinghall = await WeddingHallModel.findById(id);
        if (weddinghall) {
            res.json({ weddinghall, success: true });
        } else {
            throw new Error("Wedding Hall Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const updateWeddingHall = async (req, res) => {
    const { id } = req.params;
    try {
        const weddinghall = await WeddingHallModel.findById(id);
        if (weddinghall) {
            const updatedWeddinghall = await WeddingHallModel.findByIdAndUpdate(id, req.body);
            res.json({ updatedWeddinghall, success: true });
        } else {
            throw new Error("Wedding Hall Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const deleteWeddingHall = async (req, res) => {
    const { id } = req.params;
    try {
        const weddinghall = await WeddingHallModel.findById(id);
        if (weddinghall) {
            await WeddingHallModel.findByIdAndDelete(id);
            res.json({ msg: "Wedding Hall Successfully Deleted", success: true });
        } else {
            throw new Error("Wedding Hall Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { createWeddingHall, getWeddingHallById, getWeddingHalls, updateWeddingHall, deleteWeddingHall }