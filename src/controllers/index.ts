import { NextFunction, Request, Response } from 'express';

const indexController = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export default indexController;
