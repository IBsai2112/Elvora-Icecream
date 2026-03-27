import express from "express";
import { addFlavor, listFlavors } from "../controllers/flavorController.js";

const flavorRouter = express.Router();

flavorRouter.post("/add", addFlavor);   // To save new ice cream
flavorRouter.get("/list", listFlavors); // To show ice cream on frontend

export default flavorRouter;