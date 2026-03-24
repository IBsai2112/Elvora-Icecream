import mongoose from "mongoose";

const flavorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // We will store the image filename/URL
    category: { type: String, required: true },
    isTrending: { type: Boolean, default: false }
});

// If the model already exists, use it; otherwise, create it.
const flavorModel = mongoose.models.flavor || mongoose.model("flavor", flavorSchema);

export default flavorModel;