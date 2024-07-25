import { Request, Response } from "express";
import usersService from "./service.ts";
import { CreateUserDTO } from "./dto.ts";
import { instanceToInstance, plainToClass, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import AppError from "../../common/AppError.ts";
import { DTOMapping } from "../../common/config/mappingDTOs.ts";
import { responseWrapper } from "../../common/utils/methods.ts";

class UsersController {
    async createUser(req: Request, res: Response) {
        const {data, dataType} = req.body;

        if (DTOMapping[dataType] !== CreateUserDTO) {
            throw new AppError("Invalid data for operation", 422);
        }
        
        const createUserDTO = plainToInstance(CreateUserDTO, data);

        const createdUser = await usersService.createUser(createUserDTO);

        responseWrapper(res, "User Created!", 200, createdUser);
    }
}

export default new UsersController();
