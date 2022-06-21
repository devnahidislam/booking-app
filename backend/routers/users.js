
import express from "express";
import { getAllUsers, getUser, updateUser, deleteUser } from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("Hello User you are Loged in.");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello User! you are Loged in And You can Delete your account.");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello Admin! you are Loged in And You can Delete any account.");
});

// Edit / Update
router.put("/:id", verifyUser, updateUser);
// Delete
router.delete("/:id", verifyUser, deleteUser);
// Get
router.get("/:id", verifyUser, getUser);
// Get All
router.get("/", verifyAdmin, getAllUsers);

export default router