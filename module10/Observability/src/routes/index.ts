import { Router } from 'express';

const router = Router();

// Simple health route
router.get('/', (req, res) => {
  res.send('API is running');
});

// Route to trigger error
router.get('/error', (req, res) => {
  throw new Error('Test error for Sentry 🚨');
});

export default router;
