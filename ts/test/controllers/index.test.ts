// import * as assert from 'assert/strict';
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

// describe('Test the index controller', () => {

//   it('Verify the index endpoint returns OK', (done) => {
//     const res = agent(app).get('/');
//     res.expect(200)
//       .expect('OK')
//       .end(done);
//   });
// });
