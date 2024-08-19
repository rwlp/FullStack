import path from 'path';
import fs from 'fs';
import AppError from './AppError';
import { Request, Response } from 'express';
import { ResponseDTO, ResponseWrapperDTO } from './globalTypes';

export function logError(error: AppError | Error, req?: Request) {
  const errorLogPath = path.join(__dirname, 'error.log');
  const errorMessage = `[${new Date().toISOString()}] ${error.message}\n${error.stack}\n${req ? req.toString() : 'No Request details'}\n\n`;
  
  fs.appendFile(errorLogPath, errorMessage, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });
}


export function responseWrapper(res: Response, message: string, status: number, dataType: string, data?: unknown, isCached: boolean = false, setCookie?: {cookieData: string, cookieName: string, path: string} ) {
  if (data !== undefined && !checkTypeForResponses(data)) {
    throw new AppError('Server Error Response In Data Tratment', 500, undefined, true);
  }

  if (isCached) {
    res.setHeader('Cache-Control', 'public, max-age=180');
  }

  if (setCookie) {
    res.cookie(setCookie.cookieName, setCookie.cookieData, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: `${setCookie.path}`,
      maxAge: 3600000
    });
  }
  
  res.status(status).json(new ResponseWrapperDTO(message, status, dataType, data));
};

function checkTypeForResponses(variable: unknown): boolean {

  if (!(variable instanceof ResponseDTO)) {
    if (typeof variable === "number") {
      return true;
    }
    if (typeof variable === "string") {
      return true;
    }
  } else {
    return true;
  }
  
  if (Array.isArray(variable)) {
    if (variable.every(item => item instanceof ResponseDTO)) {
      return true;
    } 
    
    if (variable.every(item => typeof item === "number")) {
      return true;
    } 
    
    if (variable.every(item => typeof item === "string")) {
      return true;
    }
  }

  return false;
}