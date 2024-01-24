const Post = require('../controllers/Post');
const express = require('express');
const router = express.Router();

router.get('/edit/:id', Post.edit);

module.exports = router;
