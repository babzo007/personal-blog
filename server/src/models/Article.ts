import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import { ArticleType } from './types/article.types.js';
import { randomUUID } from 'node:crypto';

const filePath = './src/models/data.json';

// check if file exists, if not create it
if (!existsSync(filePath)) {
  writeFileSync(filePath, JSON.stringify([]));
}

export class Article {
  static findAll() {
    const files = readFileSync(filePath, 'utf-8');
    return JSON.parse(files);
  }
  static save(data: ArticleType) {
    const files = readFileSync(filePath, 'utf-8');
    const articles = JSON.parse(files);
    articles.push(data);
    writeFileSync(filePath, JSON.stringify(articles));
    return data;
  }

  static findById(id: string) {
    const files = readFileSync(filePath, 'utf-8');
    const articles = JSON.parse(files);
    const article = articles.find((article: ArticleType) => article.id === id);
    return article;
  }

  static update(id: string, data: { title: string; content: string; author: string }): ArticleType {
    const files = readFileSync(filePath, 'utf-8');
    const articles = JSON.parse(files);
    const articleIndex = articles.findIndex((article: ArticleType) => article.id === id);
    if (articleIndex === -1) {
      throw new Error('Article not found');
    }
    const updatedArticle: ArticleType = { ...articles[articleIndex], ...data };
    articles[articleIndex] = updatedArticle;
    writeFileSync(filePath, JSON.stringify(articles));
    return updatedArticle;
  }
}
