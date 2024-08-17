import { ValidationError } from "class-validator";

class AppError {
  message: string;
  status: number;
  validationErros?: ValidationError[];
  stack?: string;
  saveError: boolean;

  constructor(message: string = "Internal Server Error", status: number = 500, validationErros?: ValidationError[], saveError = false) {
    this.message = message;
    this.status = status;
    this.validationErros = validationErros;
    this.stack = new Error().stack;
    this.saveError = saveError;
  }
}

export default AppError;