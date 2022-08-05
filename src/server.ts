import application from './app';
import { PORT } from './configs';

const app = application();
const server = app.listen(PORT || 80);

export default server;
