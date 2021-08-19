import { getRepository } from 'typeorm';
import Semester from '../entities/Semesters';

export async function getSemesters() {
  const semesters = await getRepository(Semester).find();
  return semesters;
}
