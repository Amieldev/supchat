import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import ChatRoute from './Routes/ChatRoute.js';


const app=express();

//use of express middle ware
app.use(express.static('public'));

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));

//use of routes

app.use('/chat',ChatRoute)