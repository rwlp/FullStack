import { CreateUserDTO, ResponseDTO, UserAuthDTO, UserDataDTO } from "../../common/types";
import { authUserApi, checkUserAuthCookieApi, createUserApi, logoutUserApi } from "./userApi";


export const creatUserService = async (newUserData: CreateUserDTO): Promise<ResponseDTO<UserDataDTO>> => {
  return createUserApi(newUserData)
    .then( data => data);
}

export const authUserService = async (userDataToAuth: UserAuthDTO): Promise<ResponseDTO<UserDataDTO>> => {

  return authUserApi(userDataToAuth)
    .then( data => data)
}

export const checkAuthCookieService = async (): Promise<ResponseDTO<UserDataDTO>> => {

  return checkUserAuthCookieApi()
    .then(data => data);
}

export const logoutUserService = async (): Promise<ResponseDTO<unknown>> => {

  return logoutUserApi()
    .then(data => data);
}

