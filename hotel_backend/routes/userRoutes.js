const express = require('express');
const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/userCtrl');
const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile/:id", getUserProfile)
router.get("/refresh")
router.put("/profile/update")
router.get("/logout", logoutUser)


module.exports = router;