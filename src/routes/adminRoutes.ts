import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import {
  createArticle,
  deleteArticleById,
  renderAdd,
  renderAdmin,
  renderDelete,
  renderEdit,
  updateArticleById,
} from '../controllers/adminController.js';

const router = express.Router();

router.get('/', authMiddleware, renderAdmin);

router.get('/add', authMiddleware, renderAdd);

router.get('/delete/:id', authMiddleware, renderDelete);

router.get('/edit/:id', authMiddleware, renderEdit);

router.post('/create', authMiddleware, createArticle);

router.post('/update/:id', authMiddleware, updateArticleById);

router.post('/delete/:id', authMiddleware, deleteArticleById);

export default router;
