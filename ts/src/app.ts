import express from 'express';

import errorMiddleware from './middleware/error.js';
import routes from './routes/index.js';

/**
 * Creates the Express application object with the given configurations
 *
 * @returns an Express application
 */
const application = (): express.Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes.forEach((route) => app.use('/', route.router));

  app.use(errorMiddleware);

  return app;
};

export default application;
