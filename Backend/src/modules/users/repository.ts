import prisma from "../../common/config/prismaClient.ts";
import { CreateUserDTO } from "./dto.ts";

class UsersRepository {
    async createUser(userDTO: CreateUserDTO) {
        // put here prisma.createUser
    }
}

export default new UsersRepository();
