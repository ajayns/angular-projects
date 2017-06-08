// Create Mongoose Schema for Todos stored in MongoDB
var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
    text: String,
    isCompleted: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema)
