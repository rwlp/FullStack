import { Expose } from "class-transformer";
import { IsEmail, IsString, IsStrongPassword, Length, validateSync } from "class-validator";
import AppError from "../../../common/utils/AppError";

export class CreateUserDTO {
    static getClassName() {
        return 'CreateUserDTO'
    }

    @IsString()
    @Length(1, 200)
    name: string;

    @IsEmail()
    @Length(10, 100)
    email: string;

    @IsStrongPassword()
    @Length(5, 20)
    password: string;

    constructor(data: {name: string, email: string, password: string}) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
    
        const errors = validateSync(this);
        if (errors.length > 0) {
            console.log(errors);
          throw new AppError("Invalid data, try again", 400, errors);
        }
    }
}

export class UserDTO {
    getClassName() {
        return 'UserDTO'
    }

    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    profilePhoto: string;
}

export class AuthUserDTO {
    static getClassName() {
        return 'AuthUserDTO'
    }

    @IsString()
    @Length(10, 100)
    email: string;

    @Length(5, 20)
    password: string;
}