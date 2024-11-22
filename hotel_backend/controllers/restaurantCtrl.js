const RestaurantModel = require("../models/RestaurantModel");


const createRestaurant = async (req, res) => {
    try {
        const restaurant = await RestaurantModel.create(req.body);
        res.json({ restaurant, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find();
        res.json({ restaurants, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getRestaurantById = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await RestaurantModel.findById(id);
        if (restaurant) {
            res.json({ restaurant, success: true });
        } else {
            throw new Error("Conference Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const updateRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await RestaurantModel.findById(id);
        if (restaurant) {
            const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body);
            res.json({ updatedRestaurant, success: true });
        } else {
            throw new Error("Conference Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await RestaurantModel.findById(id);
        if (restaurant) {
            await RestaurantModel.findByIdAndDelete(id);
            res.json({ msg: "Conference Room Successfully Deleted", success: true });
        } else {
            throw new Error("Conference Room Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { createRestaurant, getRestaurantById, getRestaurants, updateRestaurant, deleteRestaurant }