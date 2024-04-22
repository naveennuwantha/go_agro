import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import complaintRoute from './router/ComplaintRoute.js';
import farmerRoute from './router/FarmerRoute.js';
import listRoute from './router/listRoute.js';
import bodyParser from 'body-parser';
import multer from 'multer';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('uploads'));


const corsOption = {
    origin:true
};

app.listen(port, () => {
    console.log('server is running ' + port);
});

const URL = process.env.MONGO_URL;

mongoose.connect(URL); 

const storage = multer.diskStorage({

    destination:(req,file,cb) =>{
        cb(null,'uploads')
    },
    filename:(req,file,cb) =>{
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage:storage
})

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDb connection successful");
});


// Routes
app.use('/complaints', complaintRoute);
app.use('/farmers', farmerRoute);
app.use('/lists', listRoute);