import express from 'express'
const port = process.env.PORT ||8000;
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import connectDB from './config/db.js';
connectDB();


const app = express();

app.listen(port, () => console.log(`Server is running on port ${port}`));