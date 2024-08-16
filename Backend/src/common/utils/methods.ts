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

export function responseWrapper(res: Response, message: string, status: number, dataType: string, data: unknown, isCached: boolean = false, cookieData?: string ) {
  if (isCached) {
    res.setHeader('Cache-Control', 'public, max-age=180');
  }

  if (cookieData) {
    res.cookie('auth_token', cookieData, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: `/api/auth/`,
      maxAge: 3600000
    });
  }
  
  res.status(status).json(new ResponseDTO(message, status, dataType, data));
};