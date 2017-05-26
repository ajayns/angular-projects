var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title: String,
    body: String
});

module.exports = mongoose.model('Post', PostSchema)
