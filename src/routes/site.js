const Home = require('../controllers/Home');
const express = require('express');
const router = express.Router();

router.get('/', Home.index);

module.exports = router;
