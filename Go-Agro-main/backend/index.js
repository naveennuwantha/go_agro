import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import complaintRoute from './router/ComplaintRoute.js';
import farmerRoute from './router/FarmerRoute.js';
import listRoute from './router/listRoute.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

app.use(cors());

const corsOption = {
    origin:true
};

app.listen(port, () => {
    console.log('server is running ' + port);
});

// Database connection
const URL = process.env.MONGO_URL;

mongoose.connect(URL, {
    // Add mongoose options if needed
}); 

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDb connection successful");
});

// Routes
app.use('/complaints', complaintRoute);
app.use('/farmers', farmerRoute);
app.use('/listings', listRoute);