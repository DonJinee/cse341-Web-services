const routes = require('express').Router();
const myController = require('../controller');

routes.get('/', myController.nameFunction);
routes.get('/second', myController.secNameFunction);

module.exports = routes;
