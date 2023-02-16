import { test } from 'mocha';
import { agent } from 'supertest';
import application from '../../src/app.js';

const app = application();

test('The index endpoint should return OK', (done) => {
  const response = agent(app).get('/');
  response.expect(200)
    .expect('OK')
    .end(done);
});
