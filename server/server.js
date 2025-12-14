import express from 'express'
import cors from 'cors';
const port = process.env.PORT ||8000;
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import authRouter from './routes/auth.js';
connectDB();


const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/auth', authRouter );

app.listen(port, () => console.log(`Server is running on port ${port}`));