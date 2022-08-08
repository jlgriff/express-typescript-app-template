import application from './app';
import { environment, port } from './configs';
import { ApplicationConfig } from './interfaces/config.app';

const appConfig: ApplicationConfig = { port, environment };
const app = application(appConfig);
const server = app.listen(appConfig.port);

export default server;
