import { Request, Response } from 'express';

import * as userService from '../services/testService';

export async function getTests(req: Request, res: Response) {
  try {
    const tests = await userService.getTests();
    res.send(tests);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getProfessorTests(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    if (id < 1) return res.sendStatus(400);
    const tests = await userService.getProfessorTests(id);
    if (!tests) return res.sendStatus(404);
    res.send(tests);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getDisciplineTests(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    if (id < 1) return res.sendStatus(400);
    const tests = await userService.getDisciplineTests(id);
    if (!tests) return res.sendStatus(404);
    res.send(tests);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function insertTests(req: Request, res: Response) {
  try {
    const { semester, category, discipline, pdf, professor } = req.body;
    if (!semester || !category || !discipline || !pdf || !professor)
      return res.sendStatus(400);
    const tests = await userService.insertTests(req.body);
    if (!tests) return res.sendStatus(400);
    res.send(tests.generatedMaps[0]);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
