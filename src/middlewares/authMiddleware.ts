import { Request, Response, NextFunction } from 'express';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');
    res.status(401).send('Authentication required.');
  }

  if (typeof authHeader !== 'undefined') {
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return next();
    } else {
      res.status(401).send('Invalid credentials.');
    }
  }
};
