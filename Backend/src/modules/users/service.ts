import { validate } from "class-validator";
import { CreateUserDTO, UserDTO } from "./DTO/RequestDTO.ts";
import usersRepository from "./repository.ts";
import AppError from "../../common/utils/AppError.ts";
import { plainToInstance } from "class-transformer";
import bcrypt from 'bcrypt';

class UsersService {
    async createUser(createUserDTO: CreateUserDTO): Promise<UserDTO> {
        try {
            const salt = 10; // Need to be in env vars
            const hashedPassword = await bcrypt.hash(createUserDTO.password, salt);
            createUserDTO.password = hashedPassword;
            const createdUser = await usersRepository.createUser(createUserDTO);

            return createdUser;
        } catch (error) {
            throw error;
        }
    }
}

export default new UsersService();
