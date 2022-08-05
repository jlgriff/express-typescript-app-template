import { config } from 'dotenv';

config({ path: '.env' });

export const { NODE_ENV, PORT } = process.env;

const defaultPort = 80;
export const port = PORT
  ? parseInt(PORT, 10) || defaultPort
  : defaultPort;
