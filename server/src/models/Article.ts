import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import { ArticleType } from './types/article.types.js';

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
    const articles = Article.readArticlesFromFile();
    articles.push(data);
    writeFileSync(filePath, JSON.stringify(articles));
    return data;
  }

  private static readArticlesFromFile(): ArticleType[] {
    const files = readFileSync(filePath, 'utf-8');
    const articles: ArticleType[] = JSON.parse(files);
    return articles;
  }

  static findById(id: string) {
    const articles = Article.readArticlesFromFile();
    const article = articles.find((article: ArticleType) => article.id === id);
    if (!article) {
      throw new Error('Article not found');
    }
    return article;
  }

  static update(id: string, data: { title: string; content: string; author: string }): ArticleType {
    const articles = Article.readArticlesFromFile();
    const articleIndex = articles.findIndex((article: ArticleType) => article.id === id);
    if (articleIndex === -1) {
      throw new Error('Article not found');
    }
    const updatedArticle: ArticleType = { ...articles[articleIndex], ...data };
    articles[articleIndex] = updatedArticle;
    writeFileSync(filePath, JSON.stringify(articles));
    return updatedArticle;
  }

  static delete(id: string) {
    const articles = Article.readArticlesFromFile();
    const articleIndex = articles.findIndex((article: ArticleType) => article.id === id);
    if (articleIndex === -1) {
      throw new Error('Article not found');
    }
    articles.splice(articleIndex, 1);
    writeFileSync(filePath, JSON.stringify(articles));
  }
}
