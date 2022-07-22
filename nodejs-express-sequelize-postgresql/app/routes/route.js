const express = require('express'); //import express
const router  = express.Router(); 

const usersController = require('../controllers/users_controller'); 
router.post('/get-all-users', usersController.getAllUsers);

module.exports = router; // export to use in server.js
