const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all Todos
router.get('/todos', function (req, res, next) {
	Todo.find(function (err, result) {
		if (err) return next(err);
		res.json(result);
	});
});

// GET single Todo
router.get('/todo/:id', function (req, res, next) {
	Todo.findById(req.params.id, function (err, result) { // req.params.id finds id from url
		if (err) return next(err);
		res.json(result);
	});
});

// POST Todo
router.post('/todo', function (req, res, next) {
	var todo = req.body; // Gets HTTP post data, if undefined, it's an error
	Todo.create(todo, function (err, result) {
		if (err) {
			res.send(err);
		} else {
			res.json(result);
		}
	})
});

// Edit Todo
router.put('/todo/:id', function (req, res, next) {
	Todo.findOneAndUpdate({
		_id: req.params.id
	}, req.body, function (err, result) {
		if (err) {
			res.send(err);
		} else {
			res.json(result);
		}
	});
});


// Delete Todo
router.delete('/todo/:id', function (req, res, next) {
	Todo.remove({
		_id: req.params.id
	}, function (err, result) {
		if (err) {
			res.send(err);
		} else {
			res.json(result);
		}
	});
});

module.exports = router;
