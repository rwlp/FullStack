import { plainToInstance } from "class-transformer";
import prisma from "../../common/config/prismaClient.ts";
import { CreateUserDTORequest } from "./DTO/RequestDTO.ts";
import { UserDTOResponse } from "./DTO/ResponseDTO.ts";
import { UserAllDataDTO } from "../../common/utils/dto.ts";

class UsersRepository {
    async createUser(createUserDTO: CreateUserDTORequest): Promise<UserDTOResponse> {
        const createdUser = await prisma.user.create({
            data: {
                ...createUserDTO,
                profilePhoto: 'none',
                levelProfile: 'Arquimedes',
                totalSpend: 0
            }
        });

        return plainToInstance(UserDTOResponse, createdUser, {excludeExtraneousValues: true} );
    }

    async findUserByEmail(email: string): Promise<UserAllDataDTO | null> {
        try {
            const user: UserAllDataDTO | null = await prisma.user.findUnique({where: {
                email
            }});

            return user; 

        } catch (error) {
            throw error;
        }
    }
}

export default new UsersRepository();
