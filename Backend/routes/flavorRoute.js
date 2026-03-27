import express from "express";
import { addFlavor, listFlavors } from "../controllers/flavorController.js";
import multer from "multer";

const flavorRouter = express.Router();

// Logic to store images in the 'uploads' folder
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

flavorRouter.post("/add", upload.single("image"), addFlavor);
flavorRouter.get("/list", listFlavors);

export default flavorRouter;