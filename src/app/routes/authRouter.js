const express = require("express");

const userRouter = express.Router();
const AuthController = require("../controllers/authController");

const middleware = require('../../middlewares/auth')

userRouter.post("/register", AuthController.register);
userRouter.post("/authenticate", AuthController.authenticate);
userRouter.post("/forgot_password", AuthController.forgot_password);
userRouter.post("/reset_password", AuthController.reset_password);

userRouter.use(middleware)
userRouter.post("/mostrarRelatorio", AuthController.mostrarRelatorio);
userRouter.post("/mostrarFeedback", AuthController.mostrarFeedback);
userRouter.post("/relatorio", AuthController.relatorio);
userRouter.post("/feedback", AuthController.feedback);

module.exports = userRouter;