import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import { logError } from "../utils/methods";

export function middlewareErrors(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    res.status(err.status).json({
      message: err.message,
      status: err.status
    });

    logError(err);
  } else {
    res.status(500).json({
      message: "Internal Server Error",
      status: 500
    });

    logError(err);
  }
}