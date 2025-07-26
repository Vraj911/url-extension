const jwt= require("jsonwebtoken");
const dotenv= require("dotenv");
const User= require("../models/users.js");
const auth= async (req, res, next) => {
    try{
     const bearerHeader = req.headers.authorization;
           if(typeof bearerHeader !== "undefined") {
            const bearer = bearerHeader.split(" ");
            const token = bearer[1];
           const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.userId = decoded.userId;
            next();
           }
    }
    catch (error) {
        res.status(401).json({ error: "Unauthorized access" });
    }
}
module.exports = auth;