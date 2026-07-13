import express from "express";
import cars from "../data/cars.js";
import validateCar from "../services/carsValidationService.js";
import CarModel from "../data/carModel.js";

import {getAllCars, getCarById,
    addCar,
    deleteCar,
    updateCar,
    getSpecialCars} from "../services/carsDataService.js";

const router = express.Router();

router.get("/", (req, res) => {
const allCars = getAllCars();
 return res.send(allCars);
})

router.post("/",async (req, res) => {
  const newCar = req.body;
  const validationError = validateCar(newCar);
  if (validationError) {
    return res.status(400).send(`Validation error: ${validationError.message}`);
  }
  await addCar(newCar);

 return res.status(201).send("New car added successfully")
})

router.get("/special", (req, res) => {
  const specialCars = getSpecialCars();
  return res.send(specialCars);
});

router.get("/:id", (req, res) => {
  const carId = req.params.id;
  const car = getCarById(carId);
  if (car) {
     return res.send(car);
    }
    return res.status(404).send("Car not found");
  
});


router.delete("/:id", (req, res) => {
  const carId = req.params.id;
  const isDeleted = deleteCar(carId);
  if (isDeleted) {
    return res.send("Car deleted successfully");
  } else {
   return res.status(404).send("Car not found");
  }
});

router.put("/:id", (req, res) => {
  const carId = parseInt(req.params.id);
    const validationError = validateCar(req.body);
  if (validationError) {
    return res.status(400).send(`Validation error: ${validationError.message}`);
  }
  const isUpdated = updateCar(carId, req.body);
  if (isUpdated) {
    return res.send("Car updated successfully");
  } else {
    return res.status(404).send("Car not found");
  }
});




export default router;