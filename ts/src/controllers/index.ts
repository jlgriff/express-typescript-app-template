import { NextFunction, Request, Response } from 'express';

/**
 * Creates an endpoint that returns an OK status
 *
 * @param _req - API request
 * @param res - API response
 * @param _next - function to call the next middleware
 * @returns an empty response with a 200 status
 */
const indexController = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response> => res.sendStatus(200);

export default indexController;
