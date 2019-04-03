//vai as rotas
const express = require('express');
const routes = express.Router();

const ProfessorController = require('./controllers/ProfessorController');

routes.get('/professores', ProfessorController.index);
routes.get('/professor/:id', ProfessorController.show);
routes.post('/professor', ProfessorController.store)
routes.put('/professor/:id', ProfessorController.update);
routes.delete('/professor/:id', ProfessorController.destroy);

const AlunoController =  require('../controllers/AlunoController.js')

routes.get('/alunos', AlunoController.index)
routes.get('/aluno/:id', AlunoController.show)
routes.post('/aluno', AlunoController.store)
routes.put('/aluno/:id', AlunoController.update)
routes.delete('/aluno/:id', AlunoController.destroy)


module.exports = routes