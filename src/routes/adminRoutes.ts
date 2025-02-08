import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { renderAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.get('/', authMiddleware, renderAdmin);

export default router;
