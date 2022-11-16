import application from './app.js';
import { environment, port } from './configs/index.js';
import { ApplicationConfig } from './interfaces/config.app.js';
import log from './utilities/logger.js';

const appConfig: ApplicationConfig = { port, environment };
const app = application();
const server = app.listen(appConfig.port, () => {
  log('info', `Application is running on port ${appConfig.port} with the ${appConfig.environment} environment`);
});

export default server;
