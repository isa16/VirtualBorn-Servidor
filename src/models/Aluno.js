const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const AlunoSchema = new mongoose.Schema({
    nomeA: {
        type: String,
        required: true,
    },
    dataNasc: {
        type: Date,
        default: Date.now,
    },
    mail: {
        type: String,
        required: true,
    },
    //ver
    password: {
        type: String,
        required: true,
    },
    sexo: { 
        type: String,
        required: true,
    },
    etnia: {
        type: String,
        required: true,
    },
    corCabelo: {
        type: String,
        required: true,
    },
    corOlho: {
        type: String,
        required: true,
    },
})

AlunoSchema.plugin(mongoosePaginate)

mongoose.model('Aluno', AlunoSchema)