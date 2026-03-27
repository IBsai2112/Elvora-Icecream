import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import flavorRouter from './routes/flavorRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json()); 
app.use(cors());         

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ Successfully connected to Elvora Local DB"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// API Routes
app.use("/api/flavor", flavorRouter);
app.use("/images", express.static('uploads')); // Makes uploaded images accessible via URL

app.get("/", (req, res) => {
    res.send("Elvora Backend is Running");
});

app.listen(port, () => {
    console.log(`🚀 Server started on http://localhost:${port}`);
});