import { CreateUserDTORequest, UserAuthDTORequest } from "../DTOs/userDTOs/userDtosRequests";
import { RequestDTO, ResponseWrapperDTO } from "../utils/globalTypes";

export const DTOMapping: Record<string, any> = {
  'CreateUserDTO': CreateUserDTORequest,
  'ResponseDTO': ResponseWrapperDTO,
  'RequestDTO': RequestDTO,
  'UserAuthDTORequest': UserAuthDTORequest,
}