import { Request, Response } from "express";

import * as semesterService from "../services/semesterService";

export async function getSemesters (req: Request, res: Response) {
  try {
    const semesters = await semesterService.getSemesters();
    res.send(semesters);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}