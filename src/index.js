import express from 'express';

import connectDB from "./config/db";

//Routes
import Auth from './routes/auth/auth.routes';

const app = express();

app.use(express.json({ extends: true }));

const PORT = process.env.PORT | 5000;


//mongoDB connect
connectDB();



app.use("/api/auth/", Auth);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});