const mongoose = require("mongoose");

mongoose
  .connect(
    'mongodb+srv://icrivelli:isabela1234@pdm1-niovw.mongodb.net/test?retryWrites=true',
    {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log("Conexão", err));
module.exports = mongoose;