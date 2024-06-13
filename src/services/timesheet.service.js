const TimeEntry = require('../models/TimeEntry');

exports.createTimeEntry = async (timeEntryData) => {
    const { userId, date, hours, description } = timeEntryData;
    const timeEntry = new TimeEntry({
        userId,
        date,
        hours,
        description,
    });
    await timeEntry.save();
    return timeEntry;
};

exports.getTimeEntries = async (userId) => {
    return TimeEntry.find({ userId });
};

exports.calculateCapacity = async (userId, period) => {
    const currentDate = new Date();
    let startDate, endDate;

    if (period === 'week') {
        const startOfWeek = currentDate.getDate() - currentDate.getDay();
        startDate = new Date(currentDate.setDate(startOfWeek));
        endDate = new Date(currentDate.setDate(startOfWeek + 6));
    } else if (period === 'month') {
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    } else if (period === 'quarter') {
        const quarter = Math.floor((currentDate.getMonth() + 3) / 3);
        startDate = new Date(currentDate.getFullYear(), (quarter - 1) * 3, 1);
        endDate = new Date(currentDate.getFullYear(), quarter * 3, 0);
    } else {
        throw new Error('Invalid period');
    }

    const timeEntries = await TimeEntry.find({
        userId,
        date: { $gte: startDate, $lte: endDate }
    });

    const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
    const capacityHours = (period === 'week' ? 40 : period === 'month' ? 160 : 480) - totalHours;

    return { capacityHours };
};
