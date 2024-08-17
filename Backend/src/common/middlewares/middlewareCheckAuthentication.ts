import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import AppError from "../utils/AppError";
import { RequestFromAuthRouter } from "../utils/globalTypes";


function middlewareCheckAuthentication(req: Request & RequestFromAuthRouter, res: Response, next: NextFunction) {
  const tokenJwt = req.cookies.auth_token;

  if (!tokenJwt) {
    throw new AppError('Missing Credentials!', 401);
  }

  try {
    const {ip, agent, id } = jwt.verify(tokenJwt, process.env.JWT_SECRET_KEY!) as {ip: string, agent: string, id: string};

    if (ip !== req.ip || agent !== req.headers['user-agent']) {
      throw new AppError('Manipulation of Credentials, Invalid Token', 498, undefined, true);
    }

    req.userId = id;

    next();

  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new AppError('Invalid Token! Try login again!', 401);
    } else {
      throw error;
    }
  }
}

export default middlewareCheckAuthentication;