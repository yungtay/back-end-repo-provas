import { Request, Response } from "express";

import * as professorService from "../services/professorService";

export async function getProfessors (req: Request, res: Response) {
  try {
    const professors = await professorService.getProfessors();
    res.send(professors);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}