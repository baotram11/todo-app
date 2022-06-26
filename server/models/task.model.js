const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        TaskID: {
            type: Number,
            required: true,
            unique: true,
        },
        TaskName: {
            type: String,
            required: true,
        },
        DateStart: {
            type: Date,
            required: false,
        },
        DateEnd: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
