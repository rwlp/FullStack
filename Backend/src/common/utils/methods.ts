import path from 'path';
import fs from 'fs';
import AppError from './AppError';
import { Response } from 'express';
import { ResponseDTO } from './dto';

export function logError(error: AppError | Error) {
  const errorLogPath = path.join(__dirname, 'error.log');
  const errorMessage = `[${new Date().toISOString()}] ${error.message}\n${error.stack}\n\n`;
  
  fs.appendFile(errorLogPath, errorMessage, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });
}

export function responseWrapper(res: Response, message: string, status: number, dataType: string, data: unknown ) {
  res.status(status).json(new ResponseDTO(message, status, dataType, data));
};