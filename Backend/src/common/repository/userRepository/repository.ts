import { CreateUserDTORequest } from "../../DTOs/userDTOs/userDtosRequests";
import { UserAllDataDTO } from "../../DTOs/userDTOs/userDtosInternal";
import prisma from "../../config/prismaClient";
import { Prisma } from "@prisma/client";
import AppError from "../../utils/AppError";

class UsersRepository {
    async createUser(createUserDTO: CreateUserDTORequest): Promise<UserAllDataDTO | undefined> {

        try {
            const createdUser = await prisma.user.create({
                data: {
                    ...createUserDTO,
                    profilePhoto: 'none',
                    levelProfile: 'Arquimedes',
                    totalSpend: 0
                }
            });

            return createdUser;

        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new AppError('Email alredy in use, try another', 400);
                }
            } else {
                throw new AppError('Impossible to create user', 400)
            }
        }
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
