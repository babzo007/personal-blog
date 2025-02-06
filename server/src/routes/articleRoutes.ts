import express from 'express';
import {
  createArticle,
  // createArticle,
  deleteArticleById,
  getAllArticles,
  getArticleById,
  updateArticleById,
} from '../controllers/articlesController.js';

const router = express.Router();

router.get('/articles', getAllArticles);

router.post('/articles', createArticle);

router.get('/articles/:id', getArticleById);

router.put('/articles/:id', updateArticleById);

// router.delete('/articles/:id', deleteArticleById);

export default router;
