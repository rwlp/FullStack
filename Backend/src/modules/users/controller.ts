import { Request, Response } from "express";
import usersService from "./service";

import { responseWrapper } from "../../common/utils/methods";

class UsersController {
    async createUser(req: Request, res: Response) {
        const { data } = req.body;
        await usersService.createUser({...data});

        const userControler = new UsersController();

        userControler.authenticateUser(req, res);
    }

    async authenticateUser(req: Request, res: Response) {
        const { data } = req.body;

        const { userData, jwtTokenForCookie} = await usersService.authenticateUser(data, req.ip!, req.headers['user-agent']!);

        responseWrapper(res, `Hi ${userData.name.split(' ')[0]} :-)`, 200, 'UserDataProfileDTO', userData, false, {cookieData: jwtTokenForCookie, cookieName: 'auth_token', path: '/api/auth/'});
    }

    async logoutUser(_req: Request, res: Response) {
      res.clearCookie('auth_token', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: `/api/auth/`,
        maxAge: 3600000
      });

      responseWrapper(res, 'User logout', 200, 'none', undefined); 
    }


}

export default new UsersController();
