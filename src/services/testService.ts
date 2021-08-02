import { getRepository } from "typeorm";
import Test from "../entities/Test";
import * as schemes from '../aux/schemes'
import { response } from "express";

export async function getTests() {
  try {
    const tests = await getRepository(Test).find({ select: ["id", "pdf"], relations: ["professor"], order: { id: "ASC" } });

    return tests;
  } catch (e) {
    console.log(e)
  }

}

export async function getProfessorTests(id: number) {
  try {
    const tests = await getRepository(Test).find({ select: ["id", "pdf"], where: { professorId: id }, relations: ["semester", "discipline", "category"], order: { category: "ASC" } });
    if (!tests.length) return false
    return tests;
  } catch (e) {
    console.log(e)
  }

}

export async function getDisciplineTests(id: number) {
  try {
    const tests = await getRepository(Test).find({ select: ["id", "pdf"], where: { disciplineId: id }, relations: ["semester", "professor", "category"], order: { category: "ASC" } });
    if (!tests.length) return false
    return tests;
  } catch (e) {
    console.log(e)
  }
}

export async function insertTests(body: body) {
  try {
    try {
      const valueRecommendationName: boolean = await schemes.schemeTest.validateAsync(body)
    } catch (e) {
      console.log(e)
      return false
    }
    const tests = await getRepository(Test)
      .createQueryBuilder()
      .insert()
      .into(Test)
      .values([
        {
          semesterId: parseInt(body.semester),
          categoryId: parseInt(body.category),
          disciplineId: parseInt(body.discipline),
          pdf: body.pdf,
          professorId: parseInt(body.professor)
        }
      ])
      .returning("id")
      .execute();
      
    return tests;
  } catch (e) {
    console.log(e)
  }
}

interface body {
  semester: string,
  category: string,
  discipline: string,
  professor: string,
  pdf: string
}
