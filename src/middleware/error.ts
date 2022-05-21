import { NextFunction, Request, Response } from "express";
import { HttpException } from "../interfaces/exception";

const error = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const message = error.message;
  res.status(error.status).json({ message });
};

export default error;