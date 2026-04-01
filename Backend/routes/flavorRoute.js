import express from "express";
import { addFlavor, listFlavors, removeFlavor } from "../controllers/flavorController.js";
import multer from "multer";

const flavorRouter = express.Router();

// --- IMAGE STORAGE CONFIGURATION ---
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        // Appends timestamp to filename to prevent duplicate names
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// --- ROUTES ---

// Route to Add a New Flavor (Includes Image Upload Middleware)
flavorRouter.post("/add", upload.single("image"), addFlavor);

// Route to Get the List of All Flavors
flavorRouter.get("/list", listFlavors);

// Route to Remove a Flavor (New)
flavorRouter.post("/remove", removeFlavor);

export default flavorRouter;