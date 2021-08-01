import { getRepository } from "typeorm";

import Test from "../entities/Test";

export async function getTests() {
  const tests = await getRepository(Test).find({select: ["id", "pdf"], relations: ["professor"] });

  return tests;
}

export async function getProfessorTests(id: number) {
  const tests = await getRepository(Test).find({ select: ["id", "pdf"], where: { professorId: id }, relations: ["semester", "discipline", "category"] });

  return tests;
}

export async function getDisciplineTests(id: number) {
  const tests = await getRepository(Test).find({ select: ["id", "pdf"], where: { disciplineId: id }, relations: ["semester", "professor", "category"] });

  return tests;
}
