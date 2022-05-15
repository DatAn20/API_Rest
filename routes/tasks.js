const express = require('express')
const router = express.Router()

const {getAllTasks, createTask, getTask, upadateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(upadateTask).delete(deleteTask)
module.exports = router