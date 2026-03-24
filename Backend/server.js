import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

// App Config
const app = express();
const port = 4000;

// Middleware
app.use(express.json()); // Parses incoming JSON
app.use(cors());         // Allows Frontend (Port 5173) to talk to Backend (Port 4000)

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ Elvora Database Connected"))
    .catch((err) => console.log("❌ DB Error:", err));

// API Routes
app.get("/", (req, res) => {
    res.send("Elvora API is Live");
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});