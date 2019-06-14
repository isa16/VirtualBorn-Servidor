const express = require("express");

const userRouter = express.Router();
const AuthController = require("../controllers/authController");

userRouter.post("/register", AuthController.register);
userRouter.post("/authenticate", AuthController.authenticate);
userRouter.post("/forgot_password", AuthController.forgot_password);
userRouter.post("/reset_password", AuthController.reset_password);
userRouter.post("/relatorio", AuthController.relatorio);
userRouter.get("/mostrarRelatorio", AuthController.mostrarRelatorio);
userRouter.post("/feedback", AuthController.feedback);
userRouter.get("/mostrarFeedback", AuthController.mostrarFeedback);

module.exports = userRouter;