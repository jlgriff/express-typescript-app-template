import { NextFunction, Request, Response } from 'express';

const indexController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export default indexController;
