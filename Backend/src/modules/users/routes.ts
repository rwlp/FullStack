import { Router } from "express";
import usersController from "./controller.ts";

const usersRouter = Router();

usersRouter.use('createUser', usersController.createUser)

export default usersRouter;
