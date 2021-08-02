import { getRepository } from "typeorm";
import Professor from "../entities/Professors";

export async function getProfessors() {
  try {
    const professors = await getRepository(Professor).find({ relations: ["tests"] });
    professors.forEach((professor, index) => {
      if (!professor.tests.length) {
        professors.splice(index)
      } else {
        professor.numberTests = professor.tests.length
        delete professor.tests
      }
    });
    return professors
  } catch (e) {
    console.log(e)
  }
}