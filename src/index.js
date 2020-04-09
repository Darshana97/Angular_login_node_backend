import express from 'express';
import cors from 'cors';
import { model } from 'mongoose';


import connectDB from "./config/db";

//models
import './model/User';

//Routes
import Auth from './routes/auth/auth.routes';




const app = express();

app.use(express.json({ extends: true }));
app.use(cors());
const PORT = process.env.PORT | 5000;


//mongoDB connect
connectDB();



app.use("/api/auth/", Auth);


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});