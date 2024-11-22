const express = require('express');
const { createRoomBooking, getRoomBookingById, getRoomBookings, deleteRoomBooking, getBookingsofSingleRoom, getRoomBookingsofUser, cancelRoomBooking } = require('../controllers/roomBookingCtrl');
const router = express.Router();

router.post("/create-checkout-session", /* authmiddleware*/ createRoomBooking)
router.get("/",/* authmiddleware admin*/ getRoomBookings)
router.get("/:id", getRoomBookingById)
router.get("/:id", /* authmiddleware admin*/ getBookingsofSingleRoom)
router.get("/",/* authmiddleware*/ getRoomBookingsofUser)
router.get("/",/* authmiddleware*/ cancelRoomBooking)
// router.put("/:id", updateRoom)
router.delete("/:id", /* authmiddleware, admin*/  deleteRoomBooking)


module.exports = router;