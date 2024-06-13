const { body, validationResult } = require('express-validator');
const { createTimeEntrySchema } = require('../validations/timesheet.validation');

const validateInput = (schema) => {
    return [
        body('userId').trim().notEmpty().withMessage('User ID is required'),
        body('date').isISO8601().withMessage('Date must be a valid ISO date format'),
        body('hours').isFloat({ gt: 0 }).withMessage('Hours must be a positive number'),
        body('description').trim().notEmpty().withMessage('Description is required'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ];
};

module.exports = {
    validateInput,
    validateCreateTimeEntry: validateInput(createTimeEntrySchema),
};
