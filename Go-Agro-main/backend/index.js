import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import trackRoute from './router/trackRoute.js';
import bodyParser from "body-parser";

dotenv.config(); // Load environment variables from .env file

const app = express(); // Define app here

const PORT = process.env.PORT || 5000;

// Middleware for parsing request body
app.use(bodyParser.json());

// Middleware for handling CORS policy
app.use(cors());

// Use trackRoute middleware for '/tracks' endpoint
app.use('/tracks', trackRoute);

// Start the server
app.listen(PORT, () => {
    console.log('Server is running ' + PORT)
});

// Database connection
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
    .then(() => {
        console.log("MongoDb connection successful");
    })
    .catch(err => {
        console.error("MongoDb connection error", err);
    });
