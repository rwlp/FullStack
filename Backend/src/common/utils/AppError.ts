import { ValidationError } from "class-validator";

class AppError {
  message: string;
  status: number;
  validationErros?: ValidationError[];
  stack?: string;

  constructor(message: string = "Internal Server Error", status: number = 500, validationErros?: ValidationError[]) {
    this.message = message;
    this.status = status;
    this.validationErros = validationErros;
    this.stack = new Error().stack;
  }
}

export default AppError;