import express from 'express';
import cors from 'cors';
import articleRoutes from './routes/articleRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import path from 'path';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(express.static(path.resolve('src/public')));

app.use('/', articleRoutes);
app.use('/admin', adminRoutes);

export default app;
