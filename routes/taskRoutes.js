const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', (req, res)=>{
    const tasks = taskController.getAllTasks();
    res.status(200).json(tasks);
});

router.post('/',(req, res)=>{
    const{title, description} = req.body;
    const newTask = taskController.createTask(title, description);
    res.status(200).json(newTask);
});
module.exports = router;