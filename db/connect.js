const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => { 
    mongoose.connect(process.env.MONGODB_URI, 
    console.log('Database connected!!!'));
}

module.exports = connectDB;