const express = require('express');
const app = express();
const Port = process.env.Port || 3000;
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require('./db/connect');
const routes = require('./routes')
const bodyParser = require('body-parser');

app
    .get('/', (req, res) => {
    res.send('Utibe Omachona');
    })
    .get('/second', (req, res) => {
    res.send('Sunday Ochigbo');
});

app.use(bodyParser.json());
app.use('/', routes);

connectDB()

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`)
});