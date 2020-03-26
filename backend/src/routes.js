const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SectionController = require('./controllers/SessionController')

const connection = require('./database/connection')

const routes = express.Router()

routes.post('/sessions', SectionController.create)

//Ongs Route
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

//Incidents Route
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes;