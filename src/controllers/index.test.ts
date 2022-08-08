import agent from 'supertest';
import application from '../app';
import { ApplicationConfig } from '../interfaces/config.app';

const appConfig: ApplicationConfig = { port: 10000, environment: 'testing' };
const app = application(appConfig);

describe('Test the index controller', () => {
  it('Verify the index endpoint returns OK', (done) => {
    const res: agent.Test = agent(app).get('/');
    res.expect(200)
      .expect('OK')
      .end(done);
  });
});
