//parte do controllador do bebe
const mongoose = require('mongoose');

const Bebe = mongoose.model('Bebe');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const bebes = Bebe.paginate({}, { page, limit: 5 });

        return res.json(bebes);
    },

    async listar(req, res) {//show
        const bebe = await Bebe.finById(req.params.id);//parametro é o id

        return res.json(bebe);
    },

    async criar(req, res) { //store
        const bebe = await Bebe.create(req.body);

        return res.json(bebe);
    },

    async atualizar(req, res) { //update
        const bebe = await Bebe.finByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(bebe);
    },

    async remover(req, res) {
        await Bebe.finByIdAndRemove(req.params.id);

        return res.send();
    }
}

