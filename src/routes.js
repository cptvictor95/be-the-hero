const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Login Session
routes.post('/sessions', SessionController.create);

// get ONG profile
routes.get('/profile', ProfileController.index);

// get all ONGs
routes.get('/ongs', OngController.index);

// create ONG
routes.post('/ongs', OngController.create);

// get all Casos
routes.get('/casos', IncidentController.index);

// create Caso
routes.post('/casos', IncidentController.create);

// delete Caso
routes.delete('/casos/:id', IncidentController.delete);

module.exports = routes;