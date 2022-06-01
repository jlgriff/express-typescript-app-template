import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../interfaces/exception';

const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { message } = error;
  res.status(error.status).json({ message });
};

export default errorMiddleware;
