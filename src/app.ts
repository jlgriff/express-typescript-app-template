import express, { Application } from "express";
import { PORT } from "./configs";

import { Route } from "./interfaces/route";
import error from "./middleware/error";
import { log } from "./utilities/logger";

const application = (routes: Route[]): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes.forEach((route) => app.use("/", route.router));

  app.use(error);

  log("info", `Application is listening on port ${PORT}`);

  return app;
};

export default application;
