const mongoose = require('mongoose');
const { Schema } = mongoose;

const timeEntrySchema = new Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    hours: { type: Number, required: true },
    description: String
}, { timestamps: true });

module.exports = mongoose.model('TimeEntry', timeEntrySchema);
