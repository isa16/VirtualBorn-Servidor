//vai as rotas
const express = require('express');
const routes = express.Router();

const TurmaController =  require('../controllers/TurmaController')

routes.get('/turmas', TurmaController.index)
routes.get('/turma/:id', TurmaController.listar)
routes.post('/turma', TurmaController.criar)
routes.put('/turma/:id', TurmaController.atualizar)
routes.delete('/turma/:id', TurmaController.remover)


module.exports = routes