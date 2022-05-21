import { Application } from "express";
import application from "./app";
import { PORT } from "./configs";
import { Route } from "./interfaces/route";
import indexRoute from "./routes";

const routes: Route[] = [indexRoute()];

const app: Application = application(routes);

app.listen(PORT || 80);
