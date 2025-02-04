import express from 'express';
import { getArticles, getHome, redirectHome } from '../controllers/articlesController.js';

const routes = express.Router();

routes.get('/', redirectHome);

routes.get('/home', getHome);

routes.get('/articles', getArticles);

export default routes;
