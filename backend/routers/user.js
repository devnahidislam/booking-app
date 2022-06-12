
import express from "express";
import { getAllUsers, getUser, updateUser, deleteUser } from "../controllers/userController.js";
import { verifyToken } from './../utils/verifyToken.js';
const router = express.Router();

router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("Hello User you are authenticated.");
});

// Edit / Update
router.put("/:id", updateUser);
// Delete
router.delete("/:id", deleteUser);
// Get
router.get("/:id", getUser);
// Get All
router.get("/", getAllUsers);

export default router