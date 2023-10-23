const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

// create User schema

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username is Required'
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        trim: true,
        required: 'Password is Required',
        validate: [({ length }) => length >= 8, 'Password should be longer.']
    },
    fullname: {
        type: String,
        trim: true,
        required: 'Full Name is Required'
    },
    bio: {
        type: String
    },
    savedStocks: [{
        type: Schema.Types.ObjectId, ref: 'UserStock'
    }]
});

// hash user password before saving to database
UserSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;