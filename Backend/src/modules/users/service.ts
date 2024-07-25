import { validate } from "class-validator";
import { CreateUserDTO, UserDTO } from "./dto.ts";
import usersRepository from "./repository.ts";
import AppError from "../../common/AppError.ts";
import { plainToInstance } from "class-transformer";
import bcrypt from 'bcrypt';

class UsersService {
    async createUser(createUserDTO: CreateUserDTO): Promise<UserDTO> {

        const errors = await validate(createUserDTO);

        if (errors.length > 0) {
           const error = new AppError("User Not Created!", 422, errors);
           errors.forEach(e => console.log('Erro: ', e));
           throw error;
        }
        try {
            const salt = 10; // Need to be in env vars
            const hashedPassword = await bcrypt.hash(createUserDTO.password, salt);
            createUserDTO.password = hashedPassword;
            const createdUser = await usersRepository.createUser(createUserDTO);

            return plainToInstance(UserDTO, createdUser, {excludeExtraneousValues: true});
        } catch (error) {
            throw error;
        }
    }
}

export default new UsersService();
