import express from 'express';
import { getAllArticles, getArticleById, renderHome } from '../controllers/articlesController.js';

const router = express.Router();

router.get('/', (_, res) => {
  res.redirect('/home');
});

router.get('/home', renderHome);

router.get('/articles', getAllArticles);

router.get('/articles/:id', getArticleById);

export default router;
