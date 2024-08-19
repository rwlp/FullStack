import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { plainToInstance } from "class-transformer";
import AppError from "../../common/utils/AppError";
import { CreateUserDTORequest, UserAuthDTORequest } from "../../common/DTOs/userDTOs/userDtosRequests";
import { UserDataProfileDTO } from "../../common/DTOs/userDTOs/userDtosResponse";
import { usersRepository } from "../../common/repository/userRepository";

class UsersService {
    async createUser(createUserDTO: CreateUserDTORequest): Promise<UserDataProfileDTO> {
        try {
            const salt = process.env.SALT_QTD!;
            const hashedPassword = await bcrypt.hash(createUserDTO.password, parseInt(salt));
            createUserDTO.password = hashedPassword;
            const createdUser = await usersRepository.createUser(createUserDTO);

            return plainToInstance(UserDataProfileDTO, createdUser, {excludeExtraneousValues: true});
        } catch (error) {
            throw error;
        }
    }

    async authenticateUser(dataToAuth: UserAuthDTORequest, ip: string, browserAgent: string): Promise<{userData: UserDataProfileDTO, jwtTokenForCookie: string}> {
        try {
          const fullUserData = await usersRepository.findUserByEmail(dataToAuth.email);

          if (!fullUserData) {
              throw new AppError('Email not found try again!', 404)
          }

          const compareResult = await bcrypt.compare(dataToAuth.password, fullUserData.password);

          if (compareResult) {
              const tokenForAuth = jwt.sign(
                {
                  id: fullUserData?.id,
                  ip: ip,
                  agent: browserAgent,
                },
                process.env.JWT_SECRET_KEY!,
                {expiresIn: '1h'}
              );

              return { 
                userData: plainToInstance(UserDataProfileDTO, fullUserData, {excludeExtraneousValues: true}),
                jwtTokenForCookie: tokenForAuth
              }
          } else {
              throw new AppError('Wrong password try again !', 401)
          }
        } catch (error) {
          console.log('eror 1');

          throw error;
        }
    }
}

export default new UsersService();
