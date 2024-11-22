const express = require('express');
const { createConferenceRoom, getConferenceRooms, getConferenceRoomById, updateConferenceRoom, deleteConferenceRoom } = require('../controllers/conferenceCtrl');
const router = express.Router();

router.post("/create", createConferenceRoom)
router.get("/", getConferenceRooms)
router.get("/:id", getConferenceRoomById)
router.put("/:id", updateConferenceRoom)
router.delete("/:id", deleteConferenceRoom)


module.exports = router;