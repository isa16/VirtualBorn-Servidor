//modelagem de dados do professor
const mongoose = require('mongoose');
const mongossePaginate = require('mongoose-paginate');

const ConsultaSchema = new mongoose.Schema({
    nome_prof: {
        type: String,
        required: true,
    },
    email_prof: {
        type: String,
        required: true,
    },
    senha_prof: {
        type: String,
        required: true,
    },
});

ConsultaSchema.plugin(mongossePaginate);

mongoose.model('Consulta', ConsultaSchema);