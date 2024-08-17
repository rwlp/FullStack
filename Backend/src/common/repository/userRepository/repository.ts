import { CreateUserDTORequest } from "../../DTOs/userDTOs/userDtosRequests";
import { UserAllDataDTO } from "../../DTOs/userDTOs/userDtosInternal";
import prisma from "../../config/prismaClient";

class UsersRepository {
    async createUser(createUserDTO: CreateUserDTORequest): Promise<UserAllDataDTO> {
        const createdUser = await prisma.user.create({
            data: {
                ...createUserDTO,
                profilePhoto: 'none',
                levelProfile: 'Arquimedes',
                totalSpend: 0
            }
        });

        return createdUser;
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
