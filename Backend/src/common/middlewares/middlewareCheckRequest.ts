import { NextFunction, Request, Response } from "express";
import { RequestDTO } from "../utils/globalTypes";

export function middlewareCheckRequestBody(req: Request, res: Response, next: NextFunction) {
  const {dataType, data, message } = req.body;
  const bodyData = new RequestDTO(message, dataType, data);
  req.body = bodyData;

  next();
}