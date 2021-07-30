import { Request, Response } from "express";

import * as disciplineService from "../services/disciplineService";

export async function getDisciplines (req: Request, res: Response) {
  try {
    const disciplines = await disciplineService.getDisciplines();
    res.send(disciplines);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}