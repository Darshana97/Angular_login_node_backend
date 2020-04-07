import express from 'express';

import connectDB from "./config/db";

const app = express();

const PORT = process.env.PORT | 5000;




connectDB();

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});