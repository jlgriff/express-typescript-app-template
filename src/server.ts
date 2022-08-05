import application from './app';
import { PORT } from './configs';
import routes from './routes';

const app = application(routes);
const server = app.listen(PORT || 80);

export default server;
