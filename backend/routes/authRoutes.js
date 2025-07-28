    const express = require('express');
    const router = express.Router();
    const User = require('../models/users.js');
    const Stats=require('../models/stats.js');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    router.get('/', (req, res) => {
        res.send("Authentication Backend is working ✅");
    });
    router.post('/register', async (req, res) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }   
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, email, password: hashedPassword });
            await newUser.save();
            let stats = await Stats.findOne();
if (!stats) {
    stats = new Stats({ totalUsers: 1 });
} else {
    stats.totalUsers += 1;
}
await stats.save();
            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ error: "Internal server error" });
        }   
    });
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Invalid email or password" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid email or password" });
            }
            const token=jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: "Login successful" , token });
        } catch (error) {
            console.error("Error logging in user:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
    router.post('/logout', (req, res) => {
        res.json({ message: "Logout successful" });
    });
    module.exports = router;
    