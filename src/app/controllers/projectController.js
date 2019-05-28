const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

const list = async (req, res) => {
    res.send({ ok: true, user: req.userId });
};

module.exports = { list };