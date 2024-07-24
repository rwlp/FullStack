import { CreateUserDTO } from "./dto.ts";
import usersRepository from "./repository.ts";

class UsersService {
    async createUser(userDTO: CreateUserDTO) {
        try {
            // put bussines logic here and return user created
            const user = await usersRepository.createUser(userDTO);
        } catch {

        }
    }
}

export default new UsersService();
