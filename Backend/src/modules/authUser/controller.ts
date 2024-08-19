import { Request, Response } from 'express';
import AppError from '../../common/utils/AppError';
import { responseWrapper } from '../../common/utils/methods';
import { RequestFromAuthRouter } from '../../common/utils/globalTypes';
import { authUserService } from '.';

class AuthUserController {
  async getUserProfileData(req: Request & RequestFromAuthRouter, res: Response) {

    const userProfileData = await authUserService.getUserProfileData(req.userId);

    responseWrapper(res, `Hi ${userProfileData.name.split(' ')[0]} :-)`, 200, 'UserProfileDataDTO', userProfileData, false);
  }
}

export default new AuthUserController();
