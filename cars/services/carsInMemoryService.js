import cars from "../data/cars.js";

const getAllCars = () => {
  return cars;
}

const getCarById = (id) => {
  const carId = parseInt(id);
  return cars.find(c => c.id === carId);
}

const addCar = (newCar) => {
  cars.push(newCar);
}

const deleteCar = (id) => {
  const carId = parseInt(id);
  const index = cars.findIndex(c => c.id === carId);
    if (index !== -1) {
    cars.splice(index, 1);
    return true;
  }
    return false;
}

const updateCar = (id, updatedCar) => {
  const carId = parseInt(id);
  const carIndex = cars.findIndex((c) => c.id === carId);
  if (carIndex === -1) {
    return false;
  }
  cars[carIndex] = { ...cars[carIndex], ...updatedCar, id: carId };
  return true;
}

export  {
  getAllCars,
  getCarById,
    addCar,
    deleteCar,
    updateCar
};