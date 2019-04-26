const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const BebeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    id:[],
    aluno:[],
    professor:[],
})

BebeSchema.plugin(mongoosePaginate)

mongoose.model('Bebe', BebeSchema)
  