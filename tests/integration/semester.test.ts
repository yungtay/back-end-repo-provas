import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /category', () => {
  it('should answer with a array of objects containing id and name', async () => {
    const response = await supertest(app).get('/semesters');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
        }),
      ])
    );

    expect(response.status).toBe(200);
  });
});
