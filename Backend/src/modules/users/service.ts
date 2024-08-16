import jwt from "jsonwebtoken";
import { CreateUserDTORequest, UserAuthDTORequest } from "./DTO/RequestDTO";
import usersRepository from "./repository";
import bcrypt from 'bcrypt';
import { UserDTOResponse } from "./DTO/ResponseDTO";
import { plainToInstance } from "class-transformer";
import AppError from "../../common/utils/AppError";

class UsersService {
    async createUser(createUserDTO: CreateUserDTORequest): Promise<UserDTOResponse> {
        try {
            const salt = process.env.SALT_QTD!;
            const hashedPassword = await bcrypt.hash(createUserDTO.password, salt);
            createUserDTO.password = hashedPassword;
            const createdUser = await usersRepository.createUser(createUserDTO);

            return plainToInstance(UserDTOResponse, createdUser);
        } catch (error) {
            throw error;
        }
    }

    async authenticateUser(dataToAuth: UserAuthDTORequest, ip: string, browserAgent: string): Promise<{userData: UserDTOResponse, jwtTokenForCookie: string}> {
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
                userData: plainToInstance(UserDTOResponse, fullUserData, {excludeExtraneousValues: true}),
                jwtTokenForCookie: tokenForAuth
              }
          } else {
              throw new AppError('Wrong password try again !', 401)
          }


        } catch (error) {
          throw error;
        }
    }
}

export default new UsersService();
