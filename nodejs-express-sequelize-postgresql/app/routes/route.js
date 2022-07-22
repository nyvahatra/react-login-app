const express = require('express'); //import express
const router  = express.Router(); 

const usersController = require('../controllers/users_controller'); 
router.post('/get-count-users', usersController.getCountUsers);
router.get('/get-all-users', usersController.getAllUsers);
router.post('/get-user', usersController.getUser);
router.post('/insert-user', usersController.insertUser);
router.post('/delete-user', usersController.deleteUser);

const productController = require('../controllers/product_controller'); 
router.get('/get-all-products', productController.getAllProducts);

module.exports = router; // export to use in server.js
