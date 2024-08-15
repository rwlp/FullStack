import { Router } from "express";
import usersController from "./controller";

const usersRouter = Router();

usersRouter.post('/createUser', usersController.createUser);
usersRouter.post('/authenticateUser', usersController.authenticateUser);

export default usersRouter;
