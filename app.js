const express = require('express');
const app = express();
const Port = process.env.Port || 3000;
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
const connectDB = require('./db/connect');
const routes = require('./routes')
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app
    .get('/', (req, res) => {
    res.send('Utibe Omachona');
    })
    .get('/second', (req, res) => {
    res.send('Sunday Ochigbo');
});

app
   .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
   .use(bodyParser.json())
   .use(cors())
   .use(express.json())
   .use(express.urlencoded({ extended: true }))
   .use('/', routes);

   

connectDB()

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`)
});