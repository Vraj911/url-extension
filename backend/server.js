const express = require('express');
const app = express();
const connectDB = require('./configs/configure.js');
const userRoute = require('./routes/userRoute.js');  
const dotenv = require('dotenv');
const cors = require('cors');
const auth = require('./middleware/auth.js');    
const swaggerUi=require('swagger-ui-express');
const swaggerJsdoc=require('swagger-jsdoc');   
const authRoutes = require('./routes/authRoutes.js'); 
dotenv.config();
connectDB()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection failed:', err));
const swaggerOptions={
 definition: {
        openapi: "3.0.0",
        info: {
            title: "Shortify",
            version: "1.0.0",
            description: "API documentation for URL Shortener backend",
        },
        servers: [
            { url: "http://localhost:5000" }, 
            { url: "https://url-extension-1.onrender.com" } 
        ],
    },
    apis: ["./routes/*.js"],
};
const swaggerSpec=swaggerJsdoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const allowedOrigins = [
  'http://localhost:5173',        
  'https://url-shortenere.netlify.app', 
  'http://localhost:3000'
];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get("/", (req, res) => {
    res.send("welcome");
});
app.use('/auth', authRoutes);        
app.use("/url", auth, userRoute);    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
