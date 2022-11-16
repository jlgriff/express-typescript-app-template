import { Router } from 'express';
import indexController from '../controllers/index.js';
import { Route } from '../interfaces/route.js';

const indexRoute = (path: string): Route => {
  const router = Router();
  router.get(path, indexController);
  return { path, router };
};

const routes = [indexRoute('/')];

export default routes;
