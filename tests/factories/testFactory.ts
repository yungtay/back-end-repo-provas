import { getRepository } from "typeorm";
import faker from 'faker'

import Test from "../../src/entities/Test";

export async function createTest() {
    const test = await getRepository(Test).createQueryBuilder()
        .insert()
        .into(Test)
        .values([
            {
                semesterId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                categoryId: faker.datatype.number({ 'min': 1, 'max': 5 }),
                disciplineId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                pdf: "https://www.globo.com/",
                professorId: faker.datatype.number({ 'min': 1, 'max': 9 })
            },

            {
                semesterId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                categoryId: faker.datatype.number({ 'min': 1, 'max': 5 }),
                disciplineId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                pdf: "https://www.globo.com/",
                professorId: faker.datatype.number({ 'min': 1, 'max': 9 })
            },

            {
                semesterId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                categoryId: faker.datatype.number({ 'min': 1, 'max': 5 }),
                disciplineId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                pdf: "https://www.globo.com/",
                professorId: faker.datatype.number({ 'min': 1, 'max': 9 })
            },

            {
                semesterId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                categoryId: faker.datatype.number({ 'min': 1, 'max': 5 }),
                disciplineId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                pdf: "https://www.globo.com/",
                professorId: faker.datatype.number({ 'min': 1, 'max': 9 })
            },

            {
                semesterId: faker.datatype.number({ 'min': 1, 'max': 8 }),
                categoryId: faker.datatype.number({ 'min': 1, 'max': 5 }),
                disciplineId: 1,
                pdf: "https://www.globo.com/",
                professorId: 1
            },
        ])
        .execute();

    return test;
}

const body = {
    semester: String(faker.datatype.number({ 'min': 1, 'max': 8 })),
    category: String(faker.datatype.number({ 'min': 1, 'max': 5 })),
    discipline: String(faker.datatype.number({ 'min': 1, 'max': 8 })),
    pdf: "https://www.globo.com/",
    professor: String(faker.datatype.number({ 'min': 1, 'max': 9 }))
}

export {body}
