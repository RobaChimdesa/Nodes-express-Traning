import { Router } from 'express';
import { register, login, refreshToken } from '../controllers/auth.controller';
import { authRateLimiter } from '../middleware/rateLimiter';
const router = Router();

router.post('/register', authRateLimiter,  register);
router.post('/login',  authRateLimiter, login);
router.post('/refresh', refreshToken)

export default router;