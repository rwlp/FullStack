import { CreateUserDTO } from "../../modules/users";
import { RequestDTO, ResponseDTO } from "../utils/dto";

export const DTOMapping: Record<string, any> = {
  CreateUserDTO: CreateUserDTO,
  ResponseDTO: ResponseDTO,
  RequestDTO: RequestDTO,
}