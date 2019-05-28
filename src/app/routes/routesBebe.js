//vai as rotas
const express = require('express');
const routes = express.Router();

const BebeController =  require('../controllers/BebeController')

routes.get('/bebes', BebeController.index)
routes.get('/bebe/:id', BebeController.listar)
routes.post('/bebe', BebeController.criar)
routes.put('/bebe/:id', BebeController.atualizar)
routes.delete('/bebe/:id', BebeController.remover)


module.exports = routes