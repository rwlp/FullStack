import { Router } from 'express';
import authUserController from './controller';

const authUserRouter = Router();

authUserRouter.get('/getUserProfileData', authUserController.getUserProfileData);


export default authUserRouter;