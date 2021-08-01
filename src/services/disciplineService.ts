import { getRepository } from "typeorm";

import Discipline from "../entities/Disciplines";

export async function getDisciplines () {
  try{
    const disciplines = await getRepository(Discipline).find({ relations: ["tests"] });
    disciplines.forEach((discipline, index) => {
      if (!discipline.tests.length) {
        disciplines.splice(index)
      } else {
        discipline.numberTests = discipline.tests.length
        delete discipline.tests
      }
    });
    return disciplines;

  } catch(e) {
    console.log(e)
  }

}