export type Category = 'phones' | 'accessories' | 'tablets';

export interface ResponseDTO {
  message: string;
  status: number;
  dataType: string; // For debug porpuses
  data: unknown;
}