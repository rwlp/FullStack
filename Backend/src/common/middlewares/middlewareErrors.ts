import e, { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import { logError } from "../utils/methods";

export function middlewareErrors(err: Error | AppError, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    res.status(err.status).json({
      message: err.message,
      status: err.status
    });
    if (err.saveError) {
      logError(err, req);
    }
  } else {
    res.status(500).json({
      message: err.message,
      status: 500
    });
    
    logError(err);
  }
}