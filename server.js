//servidor
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const api = express();
api.use(express.json());

mongoose
  .connect(
    'mongodb+srv://milena:Mi15050425!@cluster0-xvu0q.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
api.use('/api', require('./src/routes/routesAluno'));
api.use('/api', require('./src/routes/routesProfessor'));

api.listen(3001);