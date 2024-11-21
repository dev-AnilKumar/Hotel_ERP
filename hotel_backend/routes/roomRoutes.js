const express = require('express');
const { createRoom, getRooms, getRoomById, deleteRoom, updateRoom } = require('../controllers/roomCtrl');
const router = express.Router();

router.post("/create", createRoom)
router.get("/", getRooms)
router.get("/:id", getRoomById)
router.put("/:id", updateRoom)
router.delete("/:id", deleteRoom)


module.exports = router;