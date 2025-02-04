import express from 'express';
import {
  createArticle,
  deleteArticleById,
  getAdmin,
  getArticleById,
  updateArticleById,
} from '../controllers/adminController.js';

const router = express.Router();

router.get('/', getAdmin);

router.post('/articles', createArticle);

router.get('/articles:id', getArticleById);

router.put('/articles:id', updateArticleById);

router.delete('/articles:id', deleteArticleById);
export default router;
