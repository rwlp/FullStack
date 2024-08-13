import { Expose } from "class-transformer";

export class UserDTOResponse {
  getClassName() {
      return 'CreatedUserDTO'
  }
  
  @Expose()
  name: string;

  @Expose()
  email: string;
  
}