import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET!;
const SALT_ROUNDS = 12;

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (user: {
  id: number;
  email: string;
  role: string;
}) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1h" },
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET) as {
    id: number;
    email: string;
    role: string;
  };
};

// refresh token is added

const REFRESH_SECRET = process.env.REFRESH_SECRET || JWT_SECRET; // fallback

export const generateRefreshToken = (userId: number) => {
  return jwt.sign({ id: userId, type: "refresh" }, REFRESH_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, REFRESH_SECRET) as { id: number; type: string };
};

// reset token is added

const RESET_SECRET = process.env.RESET_SECRET || JWT_SECRET;

export const generateResetToken = (userId: number) => {
  return jwt.sign(
    { id: userId, type: "reset" },
    RESET_SECRET,
    { expiresIn: "15m" }, // Short lived for security
  );
};

export const verifyResetToken = (token: string) => {
  return jwt.verify(token, RESET_SECRET) as { id: number; type: string };
};
