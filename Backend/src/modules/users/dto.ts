import { Expose } from "class-transformer";
import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @Length(1, 200)
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;
}

export class UserDTO {
    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    profilePhoto: string;
}