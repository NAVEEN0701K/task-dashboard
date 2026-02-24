const express = require('express');
const { getTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const { createTaskValidation, updateTaskValidation } = require('../validators/taskValidator');
const validate = require('../middleware/validateMiddleware');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getTasks)
  .post(createTaskValidation, validate, createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTaskValidation, validate, updateTask)
  .delete(deleteTask);

module.exports = router;
