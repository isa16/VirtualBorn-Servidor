const express = require("express");
const authMiddleware = require("../../middlewares/auth");

const ProjectController = require("../controllers/projectController");

const userRouter = express.Router();

userRouter.use(authMiddleware);

userRouter.get("/", ProjectController.list);

module.exports = userRouter;
