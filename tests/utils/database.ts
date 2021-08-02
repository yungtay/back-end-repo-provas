import { getRepository } from "typeorm";
import Test from '../../src/entities/Test'

export async function clearDatabase () {
  await getRepository(Test).delete({});
}
