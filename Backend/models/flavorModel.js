import mongoose from "mongoose";

const flavorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

// The third argument "flavorsvv" forces Mongoose to use your exact collection
const flavorModel = mongoose.models.flavor || mongoose.model("flavor", flavorSchema, "flavorsvv");

export default flavorModel;