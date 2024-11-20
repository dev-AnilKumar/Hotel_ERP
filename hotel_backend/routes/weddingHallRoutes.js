const express = require('express');
const { createWeddingHall, getWeddingHalls, getWeddingHallById, updateWeddingHall, deleteWeddingHall } = require('../controllers/weddingHallCtrl');
const router = express.Router();

router.post("/create", createWeddingHall)
router.get("/", getWeddingHalls)
router.get("/:id", getWeddingHallById)
router.put("/:id", updateWeddingHall)
router.delete("/:id", deleteWeddingHall)


module.exports = router;