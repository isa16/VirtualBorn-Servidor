const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');
const mailer = require('../../modules/mailer');
const authConfig = require('./../../config/auth');
const User = require('../models/user');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

const register = async (req, res) => {

    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' });


        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id })
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Registrantion failed' });

    }
};

const authenticate = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user)
        return res.status(400).send({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida' });
    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
    });

    res.send({ user, token: generateToken({ id: user.id }) });
};

const forgot_password = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log(user);

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate({ _id: user.id }, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });

        mailer.sendMail({
            to: email,
            from: 'isabela.crivelli@novaandradina.org',
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
            if (err)
                console.log(err)
            return res.status(400).send({ error: 'Cannot send forgot password' })

            return res.send();
        });

    } catch (err) {
        console.log(err);

        res.status(400).send({ error: 'Error on forgot password, try again' });
    }
};

const reset_password = async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires');

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (token !== user.passwordResetToken)
            res.status(400).send({ error: 'Token invalid' });

        const now = new Date();

        if (now > user.passwordResetExpires)
            res.status(400).send({ error: 'Token expired, generate a new one' });

        user.password = password;

        await user.save();

        res.send();


    } catch (err) {
        res.status(400).send({ error: 'Cannot reset password, try again' });
    }

};

const relatorio = (req, res) => {
    try {
        const user = User.findByIdAndUpdate(req.userId, {
            $push: { relatorio: req.body }
        }, { new: true })
        res.send({ user })
    } catch{
        console.log(err)
    }
}

const feedback = (req, res) => {
    try {
        const user = User.findByIdAndUpdate(req.userId, {
            '$set': { feedback: req.body }
        }, { new: true })
        res.send({ user })
    } catch{
        console.log(err)
    }
}

const mostrarRelatorio = (req, res) => {
    try {
        const buscaRelatorio = User.findOne(req.body.nome);

        res.send(buscaRelatorio)
    } catch{
        console.log(err)
    }
}

const mostrarFeedback = (req, res) => {
    try {
        const buscaFeedback = User.findOne(req.body.nome);

        res.send(buscaFeedback)
    } catch{
        console.log(err)
    }
}



module.exports = {
    // async index(req, res) {
    //     const { page = 1 } = req.query;
    //     const alunos = Aluno.paginate({}, { page, limit: 5 });

    //     return res.json(alunos);
    // },

    // async listar(req, res) {//show
    //     const user = await User.findById(req.params.turma);//parametro é a turma

    //     return res.json(user);
    // },

    // async criar(req, res) { //store
    //     const aluno = await Aluno.create(req.body);

    //     return res.json(aluno);
    // },

    // async atualizar(req, res) { //update
    //     const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });

    //     return res.json(aluno);
    // },

    // async remover(req, res) {
    //     await Aluno.findByIdAndRemove(req.params.id);

    //     return res.send();
    // },
    register, authenticate, forgot_password, reset_password, relatorio, feedback, mostrarRelatorio, mostrarFeedback
};