import { Router } from 'express';
import authUserController from './controller';

const authUserRouter = Router();

authUserRouter.get("/getUserBasicData", authUserController.getUserBasicData);

export default authUserRouter;