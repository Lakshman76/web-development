const express = require('express');
const {home, createUser} = require('../controllers/userController.js');

const router = express.Router()

router.get('/',home)
router.post('/createuser', createUser)

module.exports = router;
