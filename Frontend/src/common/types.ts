export type Category = 'phones' | 'accessories' | 'tablets';

export interface ResponseDTO<T> {
  message: string;
  status: number;
  dataType: string; // For debug porpuses
  data: T;
}

export interface Description {
  id: number;
  title: string;
  text: string[];
  language: String;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserDataDTO {
  name: string;
  email: string;
}

export interface UserAuthDTO {
  email: string;
  password: string; 
}