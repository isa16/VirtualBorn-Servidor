const express = require('express');
const routes = express.Router();

const ProfessorController = require('../controllers/ProfessorController');

routes.get('/professores', ProfessorController.index);
routes.get('/professor/:id', ProfessorController.listar);
routes.post('/professor', ProfessorController.criar)
routes.put('/professor/:id', ProfessorController.atualizar);
routes.delete('/professor/:id', ProfessorController.remover);

module.exports = routes