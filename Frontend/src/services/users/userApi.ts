import { CreateUserDTO, ResponseDTO, UserAuthDTO, UserDataDTO } from "../../common/types";
import { AxiosConfigBuilder } from "../axiosConfigBuilder";
import axiosInstance from '../../common/config/axiosInstance';

export const createUserApi = async (newUserData: CreateUserDTO): Promise<ResponseDTO<UserDataDTO>> =>  {
  const configs = new AxiosConfigBuilder('users/createUser/')
    .setMethod('POST')
    .setBody(newUserData, 'CreateUserDTO')
    .build();

  return axiosInstance.request(configs);
}

export const authUserApi = async (userDataToAuth: UserAuthDTO ): Promise<ResponseDTO<UserDataDTO>> => {
  const configs = new AxiosConfigBuilder('users/authenticateUser')
    .setMethod('POST')
    .setBody(userDataToAuth, 'UserAuthDTO')
    .build();

    console.log(configs);

  
  return axiosInstance.request(configs);
}

export const checkUserAuthCookieApi = async (): Promise<ResponseDTO<UserDataDTO>> => {
  const configs = new AxiosConfigBuilder('auth/users/getUserProfileData').build();

  return axiosInstance.request(configs);
}

export const logoutUserApi = async (): Promise<ResponseDTO<unknown>> => {
  const configs = new AxiosConfigBuilder('users/logoutUser').build();

  return axiosInstance.request(configs);
}