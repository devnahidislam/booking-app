import express from 'express';
import authRoute from './routers/auth.js'
import userRoute from './routers/users.js'
import hotelsRoute from './routers/hotels.js'
import roomsRoute from './routers/rooms.js'
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js'
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

app.use(cookieParser());

// Middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || "Something went wrong.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack
  })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));