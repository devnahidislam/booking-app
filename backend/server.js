import express from 'express';
import authRoute from './routers/auth.js'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js'
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use("/auth", authRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));