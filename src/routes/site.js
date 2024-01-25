const Home = require('../controllers/Home');
const Login = require('../controllers/Login');
const express = require('express');
const router = express.Router();

router.get('/', Home.index);
router.get('/login', Login.index);
router.post('/login', Login.store);

module.exports = router;
