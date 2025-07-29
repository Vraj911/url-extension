const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwtUtils');
const userRepo = require('../repositories/userRepository');
const statsRepo = require('../repositories/statsRepository');
async function registerUser({ username, email, password }) {
    if (!username || !email || !password) {
        const err = new Error("All fields are required");
        err.code = 400;
        throw err;
    }
    const existingUser = await userRepo.findByEmail(email);
    if (existingUser) {
        const err = new Error("User already exists");
        err.code = 400;
        throw err;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRepo.createUser({ username, email, password: hashedPassword });
    await statsRepo.incrementUsers();
    return { message: "User registered successfully" };
}
async function loginUser({ email, password }) {
    if (!email || !password) {
        const err = new Error("Email and password are required");
        err.code = 400;
        throw err;
    }
    const user = await userRepo.findByEmail(email);
    if (!user) {
        const err = new Error("Invalid email or password");
        err.code = 400;
        throw err;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        const err = new Error("Invalid email or password");
        err.code = 400;
        throw err;
    }
    const token = jwtUtils.generateToken({ userId: user._id });
    return { message: "Login successful", token };
}
module.exports = { registerUser, loginUser };
