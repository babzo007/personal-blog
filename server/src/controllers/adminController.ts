import { Request, Response } from 'express';

export const getAdmin = async (req: Request, res: Response) => {
  res.send('Welcome to the admin page');
};

export const createArticle = async (req: Request, res: Response) => {
  // create article
  const body = req.body;
  console.log('body :>> ', body);
  res.send('Article created');
};

export const getArticleById = async (req: Request, res: Response) => {
  // get article by id
  res.send('Article by id');
};

export const updateArticleById = async (req: Request, res: Response) => {
  // update article by id
  res.send('Article updated');
};

export const deleteArticleById = async (req: Request, res: Response) => {
  // delete article by id
  res.send('Article deleted');
};
