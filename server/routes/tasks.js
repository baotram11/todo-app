const router = require('express').Router();

let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const taskID = req.body.TaskID;
    const taskName = req.body.TaskName;
    const dateStart = new Date();
    const dateEnd = req.body.DateEnd;

    const newTask = new Task({
        TaskID: taskID,
        TaskName: taskName,
        DateStart: dateStart,
        DateEnd: dateEnd,
    });
    newTask
        .save()
        .then(() => res.json('The new task added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
