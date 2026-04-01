import flavorModel from "../models/flavorModel.js";
import fs from 'fs';

// --- ADD NEW FLAVOR ---
const addFlavor = async (req, res) => {
    // req.file is provided by the Multer middleware in the route
    let image_filename = `${req.file.filename}`;

    const flavor = new flavorModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await flavor.save();
        res.json({ success: true, message: "Flavor Added to Elvora DB" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding flavor" });
    }
};

// --- LIST ALL FLAVORS ---
const listFlavors = async (req, res) => {
    try {
        const flavors = await flavorModel.find({});
        res.json({ success: true, data: flavors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching list" });
    }
};

// --- REMOVE FLAVOR ---
const removeFlavor = async (req, res) => {
    try {
        // 1. Find the flavor to get the image filename
        const flavor = await flavorModel.findById(req.body.id);
        
        // 2. Delete the physical image file from the 'uploads' folder
        if (flavor.image) {
            fs.unlink(`uploads/${flavor.image}`, (err) => {
                if (err) console.log("File deletion error:", err);
            });
        }

        // 3. Delete the data from MongoDB
        await flavorModel.findByIdAndDelete(req.body.id);
        
        res.json({ success: true, message: "Flavor Removed Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing flavor" });
    }
};

export { addFlavor, listFlavors, removeFlavor };