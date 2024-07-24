import { Request, Response } from "express";
import usersService from "./service.ts";
import { CreateUserDTO } from "./dto.ts";

class UsersController {
    async createUser(req: Request, res: Response) {
        try {
            const userDTO = new CreateUserDTO(req.body);
            const createdUser = await usersService.createUser(userDTO);
            // res.send data ... 
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

export default new UsersController();
