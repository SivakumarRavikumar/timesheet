const Joi = require('joi');

const createTimeEntrySchema = Joi.object({
    userId: Joi.string().required(),
    date: Joi.date().iso().required(),
    hours: Joi.number().positive().required(),
    description: Joi.string().required(),
});

module.exports = {
    createTimeEntrySchema,
};
