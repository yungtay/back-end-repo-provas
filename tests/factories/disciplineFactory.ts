import { getRepository } from 'typeorm';

import Discipline from '../../src/entities/Disciplines';

export async function createDiscipline() {
  const disciplines = await getRepository(Discipline)
    .createQueryBuilder()
    .insert()
    .into(Discipline)
    .values([
      { name: 'Cálculo 1', periodId: 1 },
      { name: 'Cálculo 2', periodId: 2 },
      { name: 'Cálculo 3', periodId: 3 },
      { name: 'Cálculo 4', periodId: 4 },
      { name: 'Física 1', periodId: 1 },
      { name: 'Física 2', periodId: 2 },
      { name: 'Física 3', periodId: 3 },
      { name: 'Física 4', periodId: 4 },
    ])
    .execute();

  return disciplines;
}
