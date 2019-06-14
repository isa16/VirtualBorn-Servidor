const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

const list = async (req, res) => {
    res.send({ ok: true, user: req.userId });
    const user = await User.findById(req.params.tipoU);//parametro é o id

   return res.json(user);
};

module.exports = { list };