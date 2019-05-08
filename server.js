//servidor
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const api = express();
api.use(express.json());

mongoose
  .connect(
    'mongodb+srv://icrivelli:isabela1234@pdm1-niovw.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
api.use('/api', require('./src/routes/routesAluno'));
api.use('/api', require('./src/routes/routesProfessor'));
api.use('/api', require('./src/routes/routesBebe'));
api.use('/api', require('./src/routes/routesTurma'));


api.listen(3001);