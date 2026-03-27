import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUNDS = 12;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
export const hashPassword = async (password) => {
    return bcrypt.hash(password, SALT_ROUNDS);
};
export const comparePassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
};
export const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
// refresh token is added
const REFRESH_SECRET = process.env.REFRESH_SECRET || JWT_SECRET; // fallback
export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId, type: "refresh" }, REFRESH_SECRET, {
        expiresIn: "7d",
    });
};
export const verifyRefreshToken = (token) => {
    return jwt.verify(token, REFRESH_SECRET);
};
// reset token is added
const RESET_SECRET = process.env.RESET_SECRET || JWT_SECRET;
export const generateResetToken = (userId) => {
    return jwt.sign({ id: userId, type: "reset" }, RESET_SECRET, { expiresIn: "15m" });
};
export const verifyResetToken = (token) => {
    return jwt.verify(token, RESET_SECRET);
};
