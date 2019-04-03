//parte do controllador do professor
const mongoose = require('mongose');

const Aluno = mongoose.mode('Aluno');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const alunos = Aluno.paginate({}, { page, limit: 5 });

        return res.json(alunos);
    },

    async show(req, res) {
        const aluno = await Aluno.finById(req.params.id);//parametro é o id

        return res.json(aluno);
    },

    async store(req, res) {
        const aluno = await Aluno.create(req.body);

        return res.json(aluno);
    },

    async update(req, res) {
        const alunor = await Aluno.finByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(aluno);
    },

    async destroy(req, res) {
        await Aluno.finByIdAndRemove(req.params.id);

        return res.send();
    }
}