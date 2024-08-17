import { Expose } from "class-transformer";
import { ResponseDTO } from "../../utils/globalTypes";

export class UserDataProfileDTO extends ResponseDTO {
  @Expose()
  name: string;
  
  @Expose()
  email: string;

  @Expose()
  password: string;

  @Expose()
  profilePhoto: string;

  @Expose()
  levelProfile: string;

  @Expose()
  totalSpend: number;
}