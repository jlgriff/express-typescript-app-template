import application from './app.js';
import { environment, port } from './configs/index.js';
import { ApplicationConfig } from './interfaces/config.app.js';

const appConfig: ApplicationConfig = { port, environment };
const app = application();
const server = app.listen(appConfig.port, () => {
  console.log(`Application is running on port ${appConfig.port} with the ${appConfig.environment} environment`);
});

export default server;
