import { getRepository } from "typeorm";

import Test from "../entities/Test";

export async function getTests() {
  try{
    const tests = await getRepository(Test).find({select: ["id", "pdf"], relations: ["professor"] });

    return tests;
  }catch(e){
    console.log(e)
  }

}

export async function getProfessorTests(id: number) {
  try{
    const tests = await getRepository(Test).find({ select: ["id", "pdf"], where: { professorId: id }, relations: ["semester", "discipline", "category"] });

    return tests;
  } catch(e){

  }

}

export async function getDisciplineTests(id: number) {
  try{
    const tests = await getRepository(Test).find({ select: ["id", "pdf"], where: { disciplineId: id }, relations: ["semester", "professor", "category"] });

    return tests;
  }catch(e){

  }

}
