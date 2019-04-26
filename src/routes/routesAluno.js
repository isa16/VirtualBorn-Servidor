//vai as rotas
const express = require('express');
const routes = express.Router();

const AlunoController =  require('../controllers/AlunoController.js')

routes.get('/alunos', AlunoController.index)
routes.get('/aluno/:id', AlunoController.listar)
routes.post('/aluno', AlunoController.criar)
routes.put('/aluno/:id', AlunoController.atualizar)
routes.delete('/aluno/:id', AlunoController.remover)


module.exports = routes