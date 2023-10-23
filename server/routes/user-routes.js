const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-cntrl');

// define routes for user

// get all users
router.get('/', userController.getAllUsers);

// get one user by id
router.get('/:id', userController.getUserById);

// create new user
router.post('/', userController.createUser);

// update existing user
router.put('/:id', userController.updateUser);

// delete existing user
router.delete('/:id', userController.deleteUser);

module.exports = router;