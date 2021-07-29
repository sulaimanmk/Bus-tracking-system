const express = require('express');
const router = express.Router();
const {authenticateUser, createUser } = require('../controllers/AuthController');

router.route('/login').post(authenticateUser);

router.route('/register').post(createUser);

module.exports = router;