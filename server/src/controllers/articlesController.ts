import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService.js';

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleService.getAllArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve articles' });
  }
};

export const getArticleById = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.getArticleById(req.params.id);
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve article' });
  }
};

export const createArticle = async (req: Request, res: Response) => {
  try {
    const newArticle = await ArticleService.createArticle(req.body);
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
};

export const updateArticleById = async (req: Request, res: Response) => {
  try {
    const update = await ArticleService.updateArticleById(req.params.id, req.body);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
};

export const deleteArticleById = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.deleteArticleById(req.params.id);
    res.json({ status: 'success', message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};
