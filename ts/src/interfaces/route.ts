import { Router } from 'express';

export interface Route {
  path: String;
  router: Router;
}
