const Post = require('../controllers/Post');
const express = require('express');
const router = express.Router();

router.get('/edit/:id', Post.edit);
router.post('/store', Post.store);
router.put('/update/:id', Post.update);

module.exports = router;
