import application from './app';
import { environment, port } from './configs';
import { ApplicationConfig } from './interfaces/config.app';
import log from './utilities/logger';

const appConfig: ApplicationConfig = { port, environment };
const app = application();
const server = app.listen(appConfig.port, () => {
  log('info', `Application is running on port ${appConfig.port} with the ${appConfig.environment} environment`);
});

export default server;
