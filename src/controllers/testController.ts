import { Request, Response } from "express";

import * as userService from "../services/testService";

export async function getTests (req: Request, res: Response) {
  try {
    const tests = await userService.getTests();
    res.send(tests);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getProfessorTests (req: Request, res: Response) {
  try {
    const { id }  = req.params
    const tests = await userService.getProfessorTests(parseInt(id));
    res.send(tests);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}