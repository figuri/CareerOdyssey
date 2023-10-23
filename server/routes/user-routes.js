const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-cntrl');
const authController = require('../controllers/auth-cntrl');

// define routes for user

// register new user
router.post('/register', authController.register);

// login existing user
router.post('/login', authController.login);

// get all users
router.get('/', userController.getAllUsers);

// get one user by id
router.get('/:id', userController.getUserById);

// create new user
// router.post('/', userController.createUser);
// may not be needed

// update existing user
router.put('/:id', userController.updateUser);

// delete existing user
router.delete('/:id', userController.deleteUser);

module.exports = router;