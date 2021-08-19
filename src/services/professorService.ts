import { getRepository } from 'typeorm';
import Professor from '../entities/Professors';

export async function getProfessors() {
  const professors = await getRepository(Professor).find({
    relations: ['tests'],
    order: { name: 'ASC' },
  });
  professors.forEach((professor, index) => {
    professor.numberTests = professor.tests.length;
    delete professor.tests;
  });
  return professors;
}
