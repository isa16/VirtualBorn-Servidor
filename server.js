//servidor
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require("body-parser");

const app = express();
const api = express();
api.use(express.json());

app.use(bodyParser.json()); // entender requisições em .json
app.use(bodyParser.urlencoded({ extended: false })); // fazer o decode de parâmetros enviados via url



mongoose
  .connect(
    'mongodb+srv://icrivelli:isabela1234@pdm1-niovw.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Rotas
app.use("/auth", require("./src/app/routes/authRouter"));
app.use("/project", require("./src/app/routes/projectRouter"));

app.use('/api', require('./src/app/routes/routesAluno'));
app.use('/api', require('./src/app/routes/routesProfessor'));
app.use('/api', require('./src/app/routes/routesBebe'));
app.use('/api', require('./src/app/routes/routesTurma'));



api.listen(3001);