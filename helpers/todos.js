let db = require('../models');

//gets all todos from the database and is used by the get route
exports.getTodos = function(req, res){
	db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
}

// creates a new todo and adds it to the database - used on the create route
exports.createTodo = function(req, res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.status(201).json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}

//finds an individual todo - used in the find todo route
exports.getTodo = function(req, res){
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo){
		res.json(foundTodo)
	})
	.catch(function(err){
		res.send(err);
	})
}

// updates to-do item - used in the update route
exports.updateTodo = function(req, res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
}

// delete to-dos - used in the todo route
exports.deleteTodo = function(req, res){
	db.Todo.delete({_id: req.params.todoId})
	.then(function(){
		res.json({message: 'task deleted'})
	})
	.catch(function(err){
		res.send(err);
	})
}


module.exports = exports;