
import express from "express";
import { createHotel, getAllHotels, getHotel, updateHotel, deleteHotel } from "../controllers/hotelController.js";
const router = express.Router();

// Create
router.post("/", createHotel);
// Edit / Update
router.put("/:id", updateHotel);
// Delete
router.delete("/:id", deleteHotel);
// Get
router.get("/:id", getHotel);
// Get All
router.get("/", getAllHotels);

export default router