const timesheetService = require('../services/timesheet.service');

exports.createTimeEntry = async (req, res) => {
    try {
        const timeEntry = await timesheetService.createTimeEntry(req.body);
        res.status(201).send(timeEntry);
    } catch (error) {
        console.error('Error creating time entry:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getTimeEntries = async (req, res) => {
    try {
        const timeEntries = await timesheetService.getTimeEntries(req.params.userId);
        res.status(200).send(timeEntries);
    } catch (error) {
        console.error('Error getting time entry:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.calculateCapacity = async (req, res) => {
    try {
        const capacity = await timesheetService.calculateCapacity(req.params.userId, req.params.period);
        res.status(200).send(capacity);
    } catch (error) {
        console.error('Error calculating capacity', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
