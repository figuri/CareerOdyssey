// this will provide user authentication on register and login 

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const authController = {
    async register(req, res) {
        try {
            const { username, email, password, fullname, bio } = req.body;
    
            // Check if fullname exists and is not empty
            if (!fullname || fullname.trim() === '') {
                return res.status(400).json({ message: 'Full Name is required.' });
            }
    
            // check if user already exists in db
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists!' });
            }
    
            // create new user
            const newUser = await User.create({ username, email, password, fullname, bio });
            await newUser.save();
    
            // create token
            const token = jwt.sign({ userId: newUser._id }, 'secret key', { expiresIn: '1h' });
    
            res.status(201).json({ user: newUser, token });
            console.log(res);
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong!' });
            console.log(error);
        }
    }
    ,

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'invalid email or password.' });
            }

            // compare password in request with hashed password in db
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(404).json({ message: 'invalid email or password.' });
            }

            // create token
            const token = jwt.sign({ userId: user._id }, 'secret key', { expiresIn: '1h' });

            res.status(200).json({ user, token });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong!' });
        }
    }
};

module.exports = authController;