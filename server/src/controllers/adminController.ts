import { Request, Response } from 'express';

export const getAdmin = async (req: Request, res: Response) => {
  res.send('Welcome to the admin page');
};
