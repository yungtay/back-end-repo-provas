import { getRepository } from 'typeorm';
import Discipline from '../entities/Disciplines';
import DisciplineProfessor from '../entities/DisciplinesProfessors';

export async function getDisciplines() {
  const disciplines = await getRepository(Discipline)
    .createQueryBuilder('disciplines')
    .leftJoinAndSelect('disciplines.period', 'periods')
    .leftJoinAndSelect('disciplines.tests', 'tests')
    .leftJoinAndSelect(
      'disciplines.disciplineProfessor',
      'disciplinesProfessors'
    )
    .orderBy('disciplines.name', 'ASC')
    .getMany();

  disciplines.forEach((discipline) => {
    discipline.numberTests = discipline.tests.length;
    delete discipline.tests;
  });
  return disciplines;
}

export async function getDisciplinesProfessors(id: number) {
  const disciplinesProfessors = await getRepository(DisciplineProfessor)
    .createQueryBuilder('disciplinesProfessors')
    .select(['disciplinesProfessors.id'])
    .leftJoinAndSelect('disciplinesProfessors.professor', 'professors')
    .where('disciplinesProfessors.disciplineId = :disciplineId', {
      disciplineId: id,
    })
    .getMany();

  return disciplinesProfessors;
}
