import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app=express();

app.use(express.static('public'));

app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({limit:"30mb"}));