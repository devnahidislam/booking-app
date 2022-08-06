import express from 'express';
import {
  createRooms,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// Create
router.post('/:id/:hotelid', verifyAdmin, createRooms);
// Edit / Update
router.put('/:id/:rid', verifyAdmin, updateRoom);

router.put('/availability/:id/:rid', updateRoomAvailability);
// Delete
router.delete('/:id/:hotelid/:rid', verifyAdmin, deleteRoom);
// Get
router.get('/:id', getRoom);
// Get All
router.get('/', getAllRooms);

export default router;
