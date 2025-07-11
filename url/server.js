    const express = require('express');
    const app = express();
    const connectDB = require('./configure.js');
    const route = require('./routes/route.js');
    const dotenv = require('dotenv');
    dotenv.config();
    connectDB().then(() => {
        console.log('Database connected successfully');
    }).catch((err) => {
        console.error('Database connection failed:', err);
    });
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/url", route);
    app.get("/",(req,res)=>{
        res.send("welcome");
    })
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
