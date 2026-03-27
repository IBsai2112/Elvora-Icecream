import flavorModel from "../models/flavorModel.js";
import fs from 'fs';

// Add Flavor Logic
const addFlavor = async (req, res) => {
    // req.file comes from Multer middleware
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

// List All Flavors
const listFlavors = async (req, res) => {
    try {
        const flavors = await flavorModel.find({});
        res.json({ success: true, data: flavors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching list" });
    }
};

export { addFlavor, listFlavors };