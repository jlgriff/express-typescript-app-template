import supertest from 'supertest';
import application from '../app';
import routes from '../routes';

const app = application(routes);

describe('Test the index controller', () => {
  it('Verify the index endpoint returns OK', (done) => {
    const res: supertest.Test = supertest(app).get('/');
    res.expect(200)
      .expect('OK')
      .end(done);
  });
});
