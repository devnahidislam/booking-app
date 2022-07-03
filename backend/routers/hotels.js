
import express from "express";
import { createHotel, getAllHotels, getHotel, updateHotel, deleteHotel, countByCity } from "../controllers/hotelController.js";
import { verifyAdmin } from './../utils/verifyToken.js';
const router = express.Router();

// Create
router.post("/:id", verifyAdmin, createHotel);
// Edit / Update
router.put("/:id/:hid", verifyAdmin, updateHotel);
// Delete
router.delete("/:id/:hid", verifyAdmin, deleteHotel);
// Get
router.get("/find/:hid", getHotel);
// Get All
router.get("/", getAllHotels);

router.get("/countbycity", countByCity);
router.get("/countbytype", getAllHotels);

export default router