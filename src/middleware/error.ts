import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../interfaces/exception.js';

/**
 * Catches and logs any errors that escaped GraphQL error-handling
 *
 * @param error - error message and status code
 * @param _req - API request
 * @param res - API response
 * @param _next - callback function
 * @returns an API response with the given status code and error message
 */
const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => res.status(error.status).json(error.message);

export default errorMiddleware;
