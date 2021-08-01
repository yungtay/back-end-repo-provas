import { getRepository } from "typeorm";
import Discipline from "../entities/Disciplines";

export async function getDisciplines () {
  try{
    const disciplines = await getRepository(Discipline).createQueryBuilder('disciplines')
    .leftJoinAndSelect('disciplines.period', 'periods')
    .leftJoinAndSelect('disciplines.tests', 'tests')
    .orderBy("disciplines.name", 'ASC')
    .getMany()

    disciplines.forEach((discipline, index) => {
      if (!discipline.tests.length) {
        disciplines.splice(index)
      } else {
        discipline.numberTests = discipline.tests.length
        delete discipline.tests
      }
    });
    console.log(disciplines)
    return disciplines;

  } catch(e) {
    console.log(e)
  }

}