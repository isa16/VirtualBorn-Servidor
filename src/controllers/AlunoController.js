//parte do controllador do professor
const mongoose = require('mongoose');

const Aluno = mongoose.model('Aluno');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const alunos = Aluno.paginate({}, { page, limit: 5 });

        return res.json(alunos);
    },

    async listar(req, res) {//show
        const aluno = await Aluno.findById(req.params.id);//parametro é o id

        return res.json(aluno);
    },

    async criar(req, res) { //store
        const aluno = await Aluno.create(req.body);

        return res.json(aluno);
    },

    async atualizar(req, res) { //update
        const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(aluno);
    },

    async remover(req, res) {
        await Aluno.findByIdAndRemove(req.params.id);

        return res.send();
    }
}
