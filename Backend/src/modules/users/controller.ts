import { Request, Response } from "express";
import usersService from "./service";

import { responseWrapper } from "../../common/utils/methods";

class UsersController {
    async createUser(req: Request, res: Response) {
        const { data } = req.body;        
        const createdUser = await usersService.createUser(data);

        responseWrapper(res, `Hi ${createdUser.name}! Make login with your email and password!`, 200, 'UserDataProfileDTO', createdUser);
    }

    async authenticateUser(req: Request, res: Response) {
        const { data } = req.body;

        const { userData, jwtTokenForCookie} = await usersService.authenticateUser(data, req.ip!, req.headers['user-agent']!);

        responseWrapper(res, `Hi ${userData.name.split(' ')[0]} :-)`, 200, 'UserDataProfileDTO', userData, false, {cookieData: jwtTokenForCookie, cookieName: 'auth_token', path: '/api/auth/'});
    }
}

export default new UsersController();
