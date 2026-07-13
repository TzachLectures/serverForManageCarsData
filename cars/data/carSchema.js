import Joi from "joi"

const carSchema = Joi.object({
    make: Joi.string().min(2).max(256).required(),
    model: Joi.string().min(2).max(256).required(),
    year: Joi.number().integer().min(1886).max(new Date().getFullYear()+1).required(),
    price: Joi.number().positive().required(),
    isSpecial: Joi.boolean().required(),
    id: [Joi.number(), Joi.string()]
});

export default carSchema;
