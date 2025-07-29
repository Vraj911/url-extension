const User = require('../models/users');

async function findByEmail(email) {
    return await User.findOne({ email });
}

async function createUser(userData) {
    const user = new User(userData);
    return await user.save();
}

module.exports = { findByEmail, createUser };
