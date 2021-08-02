import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createTest } from "../factories/testFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /disciplinesProfessors", () => {
    it("should answer with a array of objects containing id, category,discipline,semester and pdf if a discipline have tests", async () => {

        const response = await supertest(app).get("/disciplinesProfessors/1");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    professor: expect.any(Object),
                })
            ])
        );
        expect(response.status).toBe(200);
    });
});