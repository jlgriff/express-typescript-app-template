import { Router } from 'express';
import indexController from '../controllers';
import { Route } from '../interfaces/route';

const indexRoute = (path: string): Route => {
  const router = Router();
  router.get(path, indexController);
  return { path, router };
};

const routes = [indexRoute('/')];

export default routes;
