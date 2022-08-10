import express, { Application } from 'express';

import errorMiddleware from './middleware/error';
import routes from './routes';

const application = (): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes.forEach((route) => app.use('/', route.router));

  app.use(errorMiddleware);

  return app;
};

export default application;
