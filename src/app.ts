import express, { Application } from 'express';
import { PORT } from './configs';

import { Route } from './interfaces/route';
import errorMiddleware from './middleware/error';
import log from './utilities/logger';

const application = (routes: Route[]): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes.forEach((route) => app.use('/', route.router));

  app.use(errorMiddleware);

  log('info', `Application is listening on port ${PORT}`);

  return app;
};

export default application;
