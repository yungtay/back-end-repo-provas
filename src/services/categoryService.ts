import { getRepository } from "typeorm";

import Category from "../entities/Categories";

export async function getCategories () {
  try{
    const categories = await getRepository(Category).find();
    return categories;
  }catch(e) {
    console.log(e)
  }
}