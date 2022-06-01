import { Router } from 'express';
import indexController from '../controllers';
import { Route } from '../interfaces/route';

const indexRoute = (): Route => {
  const path = '/';
  const router = Router();
  router.get(path, indexController);

  return { path, router };
};

export default indexRoute;
