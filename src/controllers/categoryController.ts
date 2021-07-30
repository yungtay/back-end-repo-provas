import { Request, Response } from "express";

import * as categoryService from "../services/categoryService";

export async function getCategories(req: Request, res: Response) {
  try {
    const categories = await categoryService.getCategories();
    res.send(categories);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}