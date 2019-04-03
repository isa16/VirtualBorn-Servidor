//parte do controllador do professor
const mongoose = require('mongose');

const Professor = mongoose.mode('Professor');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const professores = Professor.paginate({}, { page, limit: 5 });

        return res.json(professores);
    },

    async show(req, res) {
        const professor = await Professor.finById(req.params.id);//parametro é o id

        return res.json(professor);
    },

    async store(req, res) {
        const professor = await Professor.create(req.body);

        return res.json(professor);
    },

    async update(req, res) {
        const professor = await Professor.finByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(professor);
    },

    async destroy(req, res) {
        await Professor.finByIdAndRemove(req.params.id);

        return res.send();
    }
}