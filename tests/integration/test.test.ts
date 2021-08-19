import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';
import { createTest } from '../factories/testFactory';
import { clearDatabase } from '../utils/database';
import faker from 'faker';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /tests', () => {
  beforeEach(async () => {
    await clearDatabase();
  });

  it('should answer with a array of objects containing id, name and pdf', async () => {
    for (let i = 0; i < 5; i++) {
      await createTest();
    }

    const response = await supertest(app).get('/tests');

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          professor: expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          }),
          pdf: expect.any(String),
        }),
      ])
    );
    expect(response.status).toBe(200);
  });

  it('should answer with a array of objects containing id, category,discipline,semester and pdf if a professor have tests', async () => {
    for (let i = 0; i < 5; i++) {
      await createTest();
    }
    const response = await supertest(app).get('/tests/professor/1');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          category: expect.any(Object),
          discipline: expect.any(Object),
          pdf: expect.any(String),
          semester: expect.any(Object),
        }),
      ])
    );
    expect(response.status).toBe(200);
  });

  it("should answer with 404 if a professor don't have tests", async () => {
    for (let i = 0; i < 5; i++) {
      await createTest();
    }
    const response = await supertest(app).get('/tests/professor/999');
    expect(response.status).toBe(404);
  });

  it('should answer with a array of objects containing id, category,discipline,semester and pdf if a discipline have tests', async () => {
    for (let i = 0; i < 5; i++) {
      await createTest();
    }
    const response = await supertest(app).get('/tests/discipline/1');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          category: expect.any(Object),
          professor: expect.any(Object),
          pdf: expect.any(String),
          semester: expect.any(Object),
        }),
      ])
    );
    expect(response.status).toBe(200);
  });

  it("should answer with 404 if a discipline don't have tests", async () => {
    for (let i = 0; i < 5; i++) {
      await createTest();
    }
    const response = await supertest(app).get('/tests/discipline/999');
    expect(response.status).toBe(404);
  });
});

describe('POST /tests', () => {
  it('should answer with status 200 and id when entering test successfully', async () => {
    const response = await supertest(app).post('/tests').send(body);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
      })
    );
    expect(response.status).toBe(200);
  });

  it('should answer with status 400 if some property is missing', async () => {
    delete body.category;
    const response = await supertest(app).post('/tests').send(body);
    expect(response.status).toBe(400);
  });

  it('should answer with status 400 if some property is missing', async () => {
    delete body.discipline;
    const response = await supertest(app).post('/tests').send(body);
    expect(response.status).toBe(400);
  });

  it('should answer with status 400 if some property is missing', async () => {
    delete body.pdf;
    const response = await supertest(app).post('/tests').send(body);
    expect(response.status).toBe(400);
  });

  it('should answer with status 400 if some property is missing', async () => {
    delete body.professor;
    const response = await supertest(app).post('/tests').send(body);
    expect(response.status).toBe(400);
  });

  it('should answer with status 400 if some property is missing', async () => {
    delete body.semester;
    const response = await supertest(app).post('/tests').send(body);
    expect(response.status).toBe(400);
  });
});

const body = {
  semester: String(faker.datatype.number({ min: 1, max: 8 })),
  category: String(faker.datatype.number({ min: 1, max: 5 })),
  discipline: String(faker.datatype.number({ min: 1, max: 8 })),
  pdf: 'https://www.globo.com/',
  professor: String(faker.datatype.number({ min: 1, max: 9 })),
};
