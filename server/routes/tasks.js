const router = require('express').Router();

let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const taskID = Number(req.body.TaskID);
    const taskName = req.body.TaskName;
    const dateStart = Date.parse(req.body.DateStart);
    const dateEnd = Date.parse(req.body.DateEnd);

    const newTask = new Task({
        taskID,
        taskName,
        dateStart,
        dateEnd,
    });

    newTask
        .save()
        .then(() => res.json('The new task added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
