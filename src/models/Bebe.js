const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const BebeSchema = new mongoose.Schema({
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

BebeSchema.plugin(mongoosePaginate)

mongoose.model('Bebe', BebeSchema)
  