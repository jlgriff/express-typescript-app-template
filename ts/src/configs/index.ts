import { config } from 'dotenv';

config({ path: '.env' });

const { PORT, NODE_ENV } = process.env;
const defaultPort = 80;
const defaultEnv = 'development';

export const port = PORT
  ? parseInt(PORT, 10) || defaultPort
  : defaultPort;
export const environment = NODE_ENV || defaultEnv;
