import { CreateUserDTO, ResponseDTO, UserAuthDTO, UserDataDTO } from "../../common/types";
import { authUserApi, createUserApi } from "./userApi";


export const creatUserService = async (newUserData: CreateUserDTO): Promise<ResponseDTO<UserDataDTO>> => {
  return createUserApi(newUserData)
    .then( data => data );
}

export const authUserService = async (userDataToAuth: UserAuthDTO): Promise<ResponseDTO<UserDataDTO>> => {

  return authUserApi(userDataToAuth)
    .then( data => data)
}