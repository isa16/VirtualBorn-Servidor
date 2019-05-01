//parte do controllador da turma
const mongoose = require('mongoose');

const Turma = mongoose.model('Turma');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const turmas = Turma.paginate({}, { page, limit: 5 });

        return res.json(turmas);
    },

    async listar(req, res) {//show
        const turma = await Turma.finById(req.params.id);//parametro é o id

        return res.json(turma);
    },

    async criar(req, res) { //store
        const turma = await Turma.create(req.body);

        return res.json(turma);
    },

    async atualizar(req, res) { //update
        const turma = await Turma.finByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(turma);
    },

    async remover(req, res) {
        await Turma.finByIdAndRemove(req.params.id);

        return res.send();
    }
}

