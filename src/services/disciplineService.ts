import { getRepository } from "typeorm";

import Disciplines from "../entities/Disciplines";

export async function getDisciplines () {
  const disciplines = await getRepository(Disciplines).find();
  return disciplines;
}