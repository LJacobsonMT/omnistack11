const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SectionController = require('./controllers/SessionController')

const connection = require('./database/connection')

const routes = express.Router()

routes.post('/sessions', SectionController.create)

//Ongs Route
routes.get('/ongs', OngController.index)
//Celebrate deve vir antes do CREATE
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create)

//Incidents Route
routes.get('/incidents', IncidentController.index)

//Paginação existe mas não é necessária
routes.post('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.create)

//Assegurando de que o ID seja um número e esteja na composição
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete)

//Tem que ter o ID da Ong no Header, vamos validar:
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index)

module.exports = routes;