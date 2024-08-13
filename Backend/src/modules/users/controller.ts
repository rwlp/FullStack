import { Request, Response } from "express";
import usersService from "./service.ts";

import { responseWrapper } from "../../common/utils/methods.ts";

class UsersController {
    async createUser(req: Request, res: Response) {
        const { data } = req.body;        
        const createdUser = await usersService.createUser(data);

        responseWrapper(res, `Hi ${createdUser.name}! Make login with your email and password!`, 200, createdUser.getClassName(), createdUser);
    }

    async authenticateUser(req: Request, res: Response) {
        const { data } = req.body;

        const userData = await usersService.authenticateUser(data);

        responseWrapper(res, `Hi ${userData.name.split(' ')[0]} :-)`, 200, userData.getClassName(), userData);
    }
}

export default new UsersController();
