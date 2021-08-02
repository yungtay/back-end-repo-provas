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

export async function getDisciplinesProfessors (req: Request, res: Response) {
  try {
    const id  = parseInt(req.params.id)
    if(id < 1) return res.sendStatus(400)
    const disciplinesProfessors = await disciplineService.getDisciplinesProfessors(id);
    res.send(disciplinesProfessors);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}