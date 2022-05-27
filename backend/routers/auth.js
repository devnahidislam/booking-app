
import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Congratulation! It's Express backend. From 5000")
});
router.get('/register', (req, res) => {
  res.send("Congratulation! It's Express Register Route")
});

export default router