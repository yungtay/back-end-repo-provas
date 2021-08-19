import { getRepository } from 'typeorm';
import Category from '../entities/Categories';

export async function getCategories() {
  return await getRepository(Category).find();
}
