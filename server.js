const express=require('express');
const app=express();
const connectDB = require('./configure.js');
const route=require('./routes/route.js');
connectDB('mongodb://localhost:27017/url').then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.error('Database connection failed:', err);
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/url",route);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});