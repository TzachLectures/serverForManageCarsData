import { getAllCars as getAllCarsFromFile, 
    getCarById as getCarByIdFromFile,
    addCar as addCarFromFile,
    deleteCar as deleteCarFromFile,
    updateCar as updateCarFromFile,
    getSpecialCars as getSpecialCarsFromFile
 } from "./carsInFileService.js";

import { getAllCars as getAllCarsFromMemory,
    getCarById as getCarByIdFromMemory,
    addCar as addCarFromMemory,
    deleteCar as deleteCarFromMemory,
    updateCar as updateCarFromMemory,
    getSpecialCars as getSpecialCarsFromMemory
 } from "./carsInMemoryService.js";

const METHOD = "file"; 


const getAllCars = () => {
    if (METHOD === "file") {
        return getAllCarsFromFile();
    }
    if (METHOD === "memory") {
        return getAllCarsFromMemory();
    }
}

const getCarById = (id) => {
    if (METHOD === "file") {
        return getCarByIdFromFile(id);
    }
    if (METHOD === "memory") {
        return getCarByIdFromMemory(id);
    }
}

const addCar = (newCar) => {
    if (METHOD === "file") {
        return addCarFromFile(newCar);
    }
    if (METHOD === "memory") {
        return addCarFromMemory(newCar);
    }
}

const deleteCar = (id) => {
    if (METHOD === "file") {
        return deleteCarFromFile(id);
    }
    if (METHOD === "memory") {
        return deleteCarFromMemory(id);
    }
}

const updateCar = (id, updatedCar) => {
    if (METHOD === "file") {
        return updateCarFromFile(id, updatedCar);
    }
    if (METHOD === "memory") {
        return updateCarFromMemory(id, updatedCar);
    }
}

const getSpecialCars = () => {
    if (METHOD === "file") {
        return getSpecialCarsFromFile();
    }
    if (METHOD === "memory") {
        return getSpecialCarsFromMemory();
    }
}

export {
    getAllCars,
    getCarById,
    addCar,
    deleteCar,
    updateCar,
    getSpecialCars
}