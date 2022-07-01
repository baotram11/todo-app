const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    TaskID: {
        type: String,
        required: true,
        unique: true,
    },
    TaskName: {
        type: String,
        required: true,
    },
    Completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Task', taskSchema);
