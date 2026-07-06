import File from "fs";

const carsFilePath = './cars/data/cars.json';

const readCarsFile = () => {
  return JSON.parse(File.readFileSync(carsFilePath || [], 'utf8'));
};

const writeCarsFile = (cars) => {
  File.writeFileSync(carsFilePath, JSON.stringify(cars, null, 2), 'utf8');
};


const getAllCars = () => {
const carsFromJson = readCarsFile()|| [];
  return carsFromJson;
}

const getCarById = (id) => {
  const carId = parseInt(id);
  const carsFromJson = readCarsFile() || [];
  return carsFromJson.find(c => c.id === carId);
}

const addCar = (newCar) => {
  const carsFromJson = readCarsFile() || [];
  carsFromJson.push(newCar);
  writeCarsFile(carsFromJson);
}

const deleteCar = (id) => {
  const carId = parseInt(id);
  const carsFromJson = readCarsFile() || [];
  const index = carsFromJson.findIndex(c => c.id === carId);
  if (index !== -1) {
    carsFromJson.splice(index, 1);
    writeCarsFile(carsFromJson);
    return true;
  }
    return false;
}

const updateCar = (id, updatedCar) => {
  const carId = parseInt(id);
  const carsFromJson = readCarsFile() || [];
  const carIndex = carsFromJson.findIndex((c) => c.id === carId);
  if (carIndex !== -1) {
    carsFromJson[carIndex] = { ...carsFromJson[carIndex], ...updatedCar , id: carId };
    writeCarsFile(carsFromJson);
    return true;
  }
  return false;
}


export {
  getAllCars,
    getCarById,
    addCar,
    deleteCar,
    updateCar
};