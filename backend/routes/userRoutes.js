// const { Router } = require('express');
const express = require('express');

const registerUser = require('../controller/userController')


const router = express.Router();


router.route('/').post();

module.exports = router;