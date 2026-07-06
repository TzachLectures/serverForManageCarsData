import express from "express";
import carsController from "./cars/controllers/carsController.js";
const router = express.Router();

router.use("/cars", carsController);

export default router;