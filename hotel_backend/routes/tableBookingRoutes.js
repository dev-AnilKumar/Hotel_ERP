const express = require('express');
const { createTableBooking, getTableBookings, getTableBookingById, getBookingsofSingleRestaurant, updateTableBooking, deleteTableBooking, cancelTableBooking, getTableBookingsofUser } = require('../controllers/tableBookingCtrl');
const router = express.Router();

router.post("/create", /* authmiddleware*/ createTableBooking)
router.get("/",/* authmiddleware admin*/ getTableBookings)
router.get("/:id", getTableBookingById)
router.get("/:id", /* authmiddleware admin*/ getBookingsofSingleRestaurant)
router.get("/",/* authmiddleware*/ getTableBookingsofUser)
router.get("/",/* authmiddleware*/ cancelTableBooking)
router.put("/:id", updateTableBooking)
router.delete("/:id", /* authmiddleware, admin*/  deleteTableBooking)


module.exports = router;