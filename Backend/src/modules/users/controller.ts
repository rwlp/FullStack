import { Request, Response } from "express";
import usersService from "./service.ts";

import { responseWrapper } from "../../common/utils/methods.ts";

class UsersController {
    async createUser(req: Request, res: Response) {
        const { data } = req.body;
        
        const createdUser = await usersService.createUser(data);

        responseWrapper(res, "User Created!", 200, createdUser.getClassName(), createdUser);
    }
}

export default new UsersController();
