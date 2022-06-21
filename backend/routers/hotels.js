
import express from "express";
import { createHotel, getAllHotels, getHotel, updateHotel, deleteHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from './../utils/verifyToken.js';
const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);
// Edit / Update
router.put("/:id", verifyAdmin, updateHotel);
// Delete
router.delete("/:id", verifyAdmin, deleteHotel);
// Get
router.get("/:id", getHotel);
// Get All
router.get("/", getAllHotels);

export default router