import express from 'express';
import * as Sentry from '@sentry/node';

import routes from './routes';
import { requestLogger } from './middleware/requestLogger';

const app = express();

// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

// Parse JSON
app.use(express.json());

// Custom logger
app.use(requestLogger);

// Routes
app.use(routes);

// ✅ Correct usage (NOT inside app.use)
Sentry.setupExpressErrorHandler(app);

// Custom error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);

  res.status(500).json({
    message: 'Internal Server Error'
  });
});

export default app;