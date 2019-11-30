const express = require('express');
let router = express.Router();
let db = require('../models');
let helpers = require('../helpers/todos');

//get all to-dos and create a new to-do
router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodo)

//get individual to-do, update individual to-do and delete individual to-do
router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)



module.exports = router;