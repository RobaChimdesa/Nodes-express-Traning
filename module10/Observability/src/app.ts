import express from 'express';
import Sentry from './lib/sentry';
import routes from './routes';
import { requestLogger } from './middleware/requestLogger';

const app = express();

// Parse JSON body
app.use(express.json());


// Custom request logger
app.use(requestLogger);

// Application routes
app.use(routes);

// Sentry error integration should run before custom error middleware.
Sentry.setupExpressErrorHandler(app);

// Custom error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err); // log locally

  res.status(500).json({
    message: 'Internal Server Error'
  });
});

export default app;