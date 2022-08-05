import request from 'supertest';
import application from '../app';
import routes from '../routes';

const app = application(routes);

describe('Test the index controller', () => {
  it('Verify the index endpoint returns a status of 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
