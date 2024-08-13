import { CreateUserDTORequest, UserAuthDTORequest } from "../../modules/users";
import { RequestDTO, ResponseDTO } from "../utils/dto";

export const DTOMapping: Record<string, any> = {
  'CreateUserDTO': CreateUserDTORequest,
  'ResponseDTO': ResponseDTO,
  'RequestDTO': RequestDTO,
  'UserAuthDTO': UserAuthDTORequest,
}