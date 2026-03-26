import { Router } from "express";
import {
  register,
  login,
  refreshToken,
  requestPasswordReset,
  resetPassword,
} from "../controllers/auth.controller";
import { authRateLimiter } from "../middleware/rateLimiter";
const router = Router();

router.post("/register", authRateLimiter, register);
router.post("/login", authRateLimiter, login);
router.post("/refresh", refreshToken);
router.post("/forgot-password", requestPasswordReset);
router.post("/reset-password", resetPassword);

export default router;
