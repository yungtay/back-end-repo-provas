import { Request, Response } from 'express';

import * as periodService from '../services/periodService';

export async function getPeriods(req: Request, res: Response) {
  try {
    const periods = await periodService.getPeriods();
    res.send(periods);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
