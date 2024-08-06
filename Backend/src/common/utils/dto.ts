import { plainToInstance } from "class-transformer";
import { IsString, Length, validateSync } from "class-validator";
import { DTOMapping } from "../config/mappingDTOs";
import AppError from "./AppError";

export class ResponseDTO {
  message: string;
  status: number;
  dataType: string;
  data: unknown;

  constructor(message: string, status: number, dataType: string, data: unknown) {
    this.message = message;
    this.status = status;
    this.dataType = dataType;
    this.data = data;
  }
}

export class RequestDTO {
  @IsString()
  @Length(1, 200)
  message: string;
    
  data: unknown;

  constructor(message: string, dataType: string, data: unknown) {
    this.message = message;
    if (!DTOMapping[dataType]) {
      throw new AppError("Invalid data in Request, this will be reported", 400);
    }

    this.data = new DTOMapping[dataType](data);

    const errors = validateSync(this);

    if (errors.length > 0) {
      console.log(errors);
      throw new AppError("Invalid data in Request, this will be reported", 500, errors);
    }
  }
}

export class ProductDTO {
  
}