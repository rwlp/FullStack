import { Request, Response } from 'express';
import AppError from '../../common/utils/AppError';
import { responseWrapper } from '../../common/utils/methods';
import { RequestFromAuthRouter } from '../../common/utils/globalTypes';
import { authUserService } from '.';

class AuthUserController {
  async getUserProfileData(req: Request & RequestFromAuthRouter, res: Response) {

    res.send(req.userId!);
  }
}

export default new AuthUserController();
