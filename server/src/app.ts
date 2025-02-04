import express from 'express';
import cors from 'cors';

import articleRoutes from './routes/articleRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/admin', adminRoutes);
app.use('/api/blog', articleRoutes);

export default app;
