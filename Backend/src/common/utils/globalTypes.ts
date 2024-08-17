import { plainToInstance } from "class-transformer";
import { IsString, Length, validateSync } from "class-validator";
import { DTOMapping } from "../config/mappingDTOs";
import AppError from "./AppError";
import { Request } from "express";
import { Product } from "@prisma/client";

export class ResponseWrapperDTO {
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

export type RequestFromAuthRouter = Request & {userId?: string};

export class ResponseDTO {
}

export class ProductResponseDTO extends ResponseDTO {
  id: number
  codeName: string
  category: string
  name: string
  capacityAvailable: string[]
  capacity: string
  priceRegular: number
  priceDiscount: number
  colorsAvailable: string[]
  color: string
  images: string[]
  image: string
  screen: string
  resolution: string
  processor: string
  ram: string
  camera: string | null 
  zoom: string | null
  cell: string[]
  year: number
}
