import { ArticleType } from '../models/types/article.types.js';
import { Article } from '../models/Article.js';
import { randomUUID } from 'node:crypto';

export class ArticleService {
  static async getAllArticles() {
    return Article.findAll();
  }

  static async createArticle(data: { title: string; content: string; author: string }): Promise<ArticleType> {
    const { title, content, author } = data;
    const date = new Date();
    const dataToSave: ArticleType = { id: randomUUID(), title, content, author, createdAt: date, updatedAt: date };
    return Article.save(dataToSave);
  }

  static async getArticleById(id: string) {
    return Article.findById(id);
  }

  static async updateArticleById(id: string, data: { title: string; content: string; author: string }) {
    return Article.update(id, data);
  }
}
