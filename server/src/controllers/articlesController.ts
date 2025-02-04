import { Request, Response } from 'express';

export const redirectHome = async (req: Request, res: Response) => {
  res.redirect('blog/home');
};

export const getHome = async (req: Request, res: Response) => {
  res.send('Welcome to the home page');
};

export const getArticles = async (req: Request, res: Response) => {
  //   try {
  //     const articles = await Article.find();
  //     res.json(articles);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }

  res.send([]);
};
