export class ResponseDTO {
  message: string;

  status: number;

  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}