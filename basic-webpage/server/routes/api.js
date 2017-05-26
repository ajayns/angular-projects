const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

// Send GET request to Mongo
router.get('/', function(req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

module.exports = router;
