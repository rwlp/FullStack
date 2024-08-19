import { plainToInstance } from "class-transformer";
import { UserDataProfileDTO } from "../../common/DTOs/userDTOs/userDtosResponse";
import { authUserRepository } from "../../common/repository/authUserRepository";


class AuthUserService {
  async getUserProfileData(id?: string): Promise<UserDataProfileDTO> {

    const userDataForResponse = await authUserRepository.getUserData(id);

    return plainToInstance(UserDataProfileDTO, userDataForResponse, {excludeExtraneousValues: true});
  }
}

export default new AuthUserService();