import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService.js';
import { ArticleType } from 'src/models/types/article.types.js';

export const renderHome = async (req: Request, res: Response) => {
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

    res.render('index', { articles: formattedArticles });
  } catch (error) {
    res.status(500).json({ error: 'Failed to display homepage' });
  }
};

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

    const formattedArticle = {
      ...article,
      createdAt: new Date(article.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
    res.render('article', { article: formattedArticle });
    // res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve article' });
  }
};
