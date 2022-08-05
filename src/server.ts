import application from './app';
import { port } from './configs';

const app = application();
const server = app.listen(port);

export default server;
