import { getRepository } from 'typeorm';
import Period from '../entities/Periods';

export async function getPeriods() {
  const categories = await getRepository(Period).find();
  return categories;
}
