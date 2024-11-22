const express = require('express');
const { createRestaurant, getRestaurants, getRestaurantById, updateRestaurant, deleteRestaurant } = require('../controllers/restaurantCtrl');
const router = express.Router();

router.post("/create", createRestaurant)
router.get("/", getRestaurants)
router.get("/:id", getRestaurantById)
router.put("/:id", updateRestaurant)
router.delete("/:id", deleteRestaurant)


module.exports = router;