import { NextFunction, Request, Response } from 'express';
import { HttpException as HttpError } from '../interfaces/exception.js';

/**
 * Catches and logs any errors that were thrown when processing the request
 *
 * @param httpError - either an error or an error with a status code
 * @param _req - API request
 * @param res - API response
 * @param _next - function to call the next middleware
 * @returns an API response with an error message and status code
 */
const errorMiddleware = (
  httpError: HttpError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => ('status' in httpError
  ? res.status(httpError.status).json(httpError.error.message)
  : res.status(500).json(httpError.message));

export default errorMiddleware;
