import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import ordersRoute from './routes/ordersRoute.js';

const app = express();
app.use(express.json());
app.use(cors()); // Use CORS middleware globally

app.get('/', (req, res) => {
    return res.status(200).send('Welcome To MERN Stack Tutorial');
});

app.use('/orders', ordersRoute);

mongoose
    .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
