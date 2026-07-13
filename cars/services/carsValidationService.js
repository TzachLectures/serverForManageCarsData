import joi from 'joi';
import carSchema from '../data/carSchema.js';
const validateCar = (car) => {
    const {error} = carSchema.validate(car);
    return error
}

export default validateCar;
