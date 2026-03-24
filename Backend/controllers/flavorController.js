import flavorModel from "../models/flavorModel.js";

// Add a new ice cream flavor
const addFlavor = async (req, res) => {
    const { name, description, price, category, image } = req.body;

    const newFlavor = new flavorModel({
        name,
        description,
        price,
        category,
        image
    });

    try {
        await newFlavor.save();
        res.json({ success: true, message: "Flavor Added Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding flavor" });
    }
};

// List all flavors
const listFlavors = async (req, res) => {
    try {
        const flavors = await flavorModel.find({});
        res.json({ success: true, data: flavors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching flavors" });
    }
};

export { addFlavor, listFlavors };