import { plainToInstance } from "class-transformer";
import prisma from "../../common/config/prismaClient.ts";
import { CreateUserDTO, UserDTO } from "./dto.ts";

class UsersRepository {
    async createUser(createUserDTO: CreateUserDTO): Promise<UserDTO> {
        const createdUser = await prisma.user.create({
            data: {
                ...createUserDTO,
                profilePhoto: 'none',
                levelProfile: 'Arquimedes',
                totalSpend: 0
            }
        });

        return plainToInstance(UserDTO, createdUser);
    }
}

export default new UsersRepository();
