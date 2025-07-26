    const express = require('express');
    const app = express();
    const connectDB = require('./configs/configure.js');
    const userRoute = require('./routes/userRoute.js');
    const dotenv = require('dotenv');
    const cors = require('cors');
    const auth = require('./middleware/auth.js');
    const authRoutes = require('./routes/authRoutes.js');
    dotenv.config();
    connectDB().then(() => {
        console.log('Database connected successfully');
    }).catch((err) => {
        console.error('Database connection failed:', err);
    });
     app.use(cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5174',
        methods: ['GET', 'POST'],
        credentials: true,}));
    app.use(express.json());
 app.get("/",(req,res)=>{
        res.send("welcome");
    })
    app.use(express.urlencoded({ extended: true }));
    app.use('/auth', authRoutes);
    app.use(express.static('public'));
    app.use("/url",auth, userRoute);
   const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

