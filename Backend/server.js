import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import flavorRouter from './routes/flavorRoute.js';
import userRouter from './routes/userRoute.js'; // 1. Import the User Router

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json()); 
app.use(cors());         

// Database Connection
// Ensure MONGODB_URI in .env is: mongodb://127.0.0.1:27017/Elvora
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ Successfully connected to Elvora Local DB"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// API Routes
app.use("/api/flavor", flavorRouter);
app.use("/api/user", userRouter);              // 2. Connect the User Authentication Routes
app.use("/images", express.static('uploads')); // Makes uploaded images accessible via URL

app.get("/", (req, res) => {
    res.send("Elvora Backend is Running");
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server started on http://localhost:${port}`);
});