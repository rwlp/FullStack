import { Expose } from "class-transformer";
import { IsEmail, IsString, IsStrongPassword, Length, validateSync } from "class-validator";
import AppError from "../../../common/utils/AppError";

export class CreateUserDTORequest {
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



export class UserAuthDTORequest {
    static getClassName() {
        return 'UserAuthDTO'
    }

    @IsString()
    @Length(10, 100)
    email: string;

    @Length(5, 20)
    password: string;
}