import { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger';

// Middleware to log incoming requests
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log()
  const start = Date.now(); // capture start time

  res.on('finish', () => {
    const duration = Date.now() - start; // calculate response time

    logger.info({
      method: req.method, // GET, POST...
      url: req.url, // endpoint
      status: res.statusCode, // HTTP status
      duration // response time in ms
    }, 'Incoming Request');
  });

  next(); // continue to next middleware
};

