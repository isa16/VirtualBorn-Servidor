const express = require("express");

const userRouter = express.Router();
const AuthController = require("../controllers/authController");

userRouter.post("/register", AuthController.register);
userRouter.post("/authenticate", AuthController.authenticate);

module.exports = userRouter;