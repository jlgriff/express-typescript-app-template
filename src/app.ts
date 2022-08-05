import express, { Application } from 'express';
import { environment, port } from './configs';

import errorMiddleware from './middleware/error';
import routes from './routes';
import log from './utilities/logger';

const application = (): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes.forEach((route) => app.use('/', route.router));

  app.use(errorMiddleware);

  log('info', `Application is running on port ${port} with the ${environment} environment`);

  return app;
};

export default application;
