import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

it('Test the Hello World Endpoint', async () => {
  const res = await request.get('/');
  expect(res.status).toBe(200);
});
