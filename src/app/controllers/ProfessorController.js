//parte do controllador do professor
const mongoose = require('mongoose');

const Professor = mongoose.model('Professor');

module.exports = {
    async index(req, res) {
        const professores = await Professor.find({});

        return res.json(professores);
    },

    async listar(req, res) {
        const professor = await Professor.findById(req.params.id);//parametro é o id

        return res.json(professor);
    },

    async criar(req, res) {
        const professor = await Professor.create(req.body);

        return res.json(professor);
    },

    async atualizar(req, res) {
        const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(professor);
    },

    async remover(req, res) {
        await Professor.findByIdAndRemove(req.params.id);

        return res.send();
    }
}

