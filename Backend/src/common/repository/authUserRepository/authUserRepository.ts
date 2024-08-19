import prisma from "../../config/prismaClient";
import { UserAllDataDTO } from "../../DTOs/userDTOs/userDtosInternal";

class AuthUserRepository {
  async getUserData(id?: string): Promise<UserAllDataDTO | null> {
    const userData = await prisma.user.findUnique({
      where: {
        id: id
      }
    });

    return userData;
  }
}

export default new AuthUserRepository();