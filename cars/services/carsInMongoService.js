import CarModel from "../data/CarModel.js";


const addCar = async (car) => {
    try {
        const newCarObject = CarModel(car);
        await newCarObject.save();
    } catch (error) {
        console.error("Error adding car:", error);
        throw error;
    }

}


export { addCar };