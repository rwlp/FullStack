import { validate } from "class-validator";
import { CreateUserDTORequest, UserAuthDTORequest } from "./DTO/RequestDTO";
import usersRepository from "./repository";
import bcrypt from 'bcrypt';
import { UserDTOResponse } from "./DTO/ResponseDTO";
import { plainToInstance } from "class-transformer";
import AppError from "../../common/utils/AppError";

class UsersService {
    async createUser(createUserDTO: CreateUserDTORequest): Promise<UserDTOResponse> {
        try {
            const salt = 10; // Need to be in env vars
            const hashedPassword = await bcrypt.hash(createUserDTO.password, salt);
            createUserDTO.password = hashedPassword;
            const createdUser = await usersRepository.createUser(createUserDTO);

            return plainToInstance(UserDTOResponse, createdUser);
        } catch (error) {
            throw error;
        }
    }

    async authenticateUser(dataToAuth: UserAuthDTORequest): Promise<UserDTOResponse> {
        try {
            const userData = await usersRepository.findUserByEmail(dataToAuth.email);

            if (!userData) {
                throw new AppError('Wrong email or password try again ou contact the system manager')
            }

            const compareResult = await bcrypt.compare(dataToAuth.password, userData.password);

            if (compareResult) {
                return plainToInstance(UserDTOResponse, userData, {excludeExtraneousValues: true})
            } else {
                throw new AppError('Wrong email or password try again ou contact the system manager')
            }

        } catch (error) {
            throw error;
        }
    }
}

export default new UsersService();
