import { getRepository } from "typeorm";

import Category from "../../src/entities/Categories";

export async function createCategory() {
  const category = await getRepository(Category).createQueryBuilder()
    .insert()
    .into(Category)
    .values([
      { name: "P1" },
      { name: "P2" },
      { name: "P3" },
      { name: "2ch" },
      { name: "Outras" },
    ])
    .execute();

  return category;
}
