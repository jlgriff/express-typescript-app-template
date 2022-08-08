import express, { Application } from 'express';
import { ApplicationConfig } from './interfaces/config.app';

import errorMiddleware from './middleware/error';
import routes from './routes';
import log from './utilities/logger';

const application = (config: ApplicationConfig): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes.forEach((route) => app.use('/', route.router));

  app.use(errorMiddleware);

  log('info', `Application is running on port ${config.port} with the ${config.environment} environment`);

  return app;
};

export default application;
