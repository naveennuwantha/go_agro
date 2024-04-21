import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import { Track } from "./modle/trackModel.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGO_URL || "mongodb://localhost:27017/goagro";

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Allow requests from specified origin or default to localhost:5173
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS method
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(234).send('Welcome');
});


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, () =>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
