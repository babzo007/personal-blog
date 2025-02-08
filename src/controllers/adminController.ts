import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService.js';

export const renderAdmin = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleService.getAllArticles();
    res.render('admin', { articles });
  } catch (error) {
    res.status(500).json({ error: 'Failed to display admin page' });
  }
};
