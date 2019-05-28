const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const TurmaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    professor:{
        type: String,
        required: true,
    },
    aluno:[],
    
})

TurmaSchema.plugin(mongoosePaginate)

mongoose.model('Turma', TurmaSchema)
  