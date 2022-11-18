import agent from 'supertest';
import application from '../app.js';

const app = application();

describe('Test the index controller', () => {
  it('Verify the index endpoint returns OK', (done) => {
    const res = agent(app).get('/');
    res.expect(200)
      .expect('OK')
      .end(done);
  });
});
