import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService.js';
import { ArticleType } from 'src/models/types/article.types.js';

export const renderAdmin = async (req: Request, res: Response) => {
  try {
    const articles: ArticleType[] = await ArticleService.getAllArticles();

    const formattedArticles = articles.map(article => ({
      ...article,
      createdAt: new Date(article.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    }));

    res.render('admin', { articles: formattedArticles });
  } catch (error) {
    res.status(500).json({ error: 'Failed to display admin page' });
  }
};

export const renderAdd = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleService.getAllArticles();
    res.render('add', { articles });
  } catch (error) {
    res.status(500).json({ error: 'Failed to display add page' });
  }
};

export const renderEdit = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.getArticleById(req.params.id);
    res.render('edit', { article });
  } catch (error) {
    res.status(500).json({ error: 'Failed to display edit page' });
  }
};

export const renderDelete = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.getArticleById(req.params.id);
    res.render('delete', { article });
  } catch (error) {
    res.status(500).json({ error: 'Failed to display delete page' });
  }
};

export const createArticle = async (req: Request, res: Response) => {
  try {
    await ArticleService.createArticle(req.body);
    res.redirect('/admin');
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
};

export const updateArticleById = async (req: Request, res: Response) => {
  try {
    await ArticleService.updateArticleById(req.params.id, req.body);
    res.redirect('/admin');
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
};

export const deleteArticleById = async (req: Request, res: Response) => {
  try {
    ArticleService.deleteArticleById(req.params.id);
    res.redirect('/admin');
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};
