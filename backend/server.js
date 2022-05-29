import express from 'express';
import authRoute from './routers/auth.js'
import userRoute from './routers/user.js'
import hotelsRoute from './routers/hotels.js'
import roomsRoute from './routers/rooms.js'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js'
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

// Middlewares
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));