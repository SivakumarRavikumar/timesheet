const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheet.controller');
const { validateCreateTimeEntry } = require('../middlewares/validation.middleware');


router.post('/time-entry', validateCreateTimeEntry,timesheetController.createTimeEntry);
router.get('/time-entry/:userId', timesheetController.getTimeEntries);
router.get('/capacity/:userId/:period', timesheetController.calculateCapacity);

module.exports = router;
