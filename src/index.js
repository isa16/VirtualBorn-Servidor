const express = require("express");
const requireDir = require('require-dir')
const bodyParser = require("body-parser");
require("./database/index")

const app = express();

app.use(bodyParser.json()); // entender requisições em .json
app.use(bodyParser.urlencoded({ extended: false })); // fazer o decode de parâmetros enviados via url

requireDir('./app/models/')
// Rotas
  app.use("/auth", require("./app/routes/authRouter"));
  app.use("/project", require("./app/routes/projectRouter"));

app.listen(3001);