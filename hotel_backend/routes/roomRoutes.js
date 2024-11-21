const express = require('express');
const { createRoom, getRooms, getRoomById, deleteRoom } = require('../controllers/roomCtrl');
const { updateMany } = require('../models/WeddingHallModel');
const router = express.Router();

router.post("/create", createRoom)
router.get("/", getRooms)
router.get("/:id", getRoomById)
router.put("/:id", updateMany)
router.delete("/:id", deleteRoom)


module.exports = router;