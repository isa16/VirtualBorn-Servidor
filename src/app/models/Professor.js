//modelagem de dados do professor
const mongoose = require('mongoose');
const mongossePaginate = require('mongoose-paginate');

const ProfessorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
});

ProfessorSchema.plugin(mongossePaginate);

mongoose.model('Professor', ProfessorSchema);

