import { hashPassword, comparePassword, generateToken } from "../utils/auth";
import {
  createUserRepo,
  findUserByEmailRepo,
  findUserByResetTokenRepo,
  updatePasswordRepo,
} from "../repositories/user.repository";

import {
  generateRefreshToken,
  verifyRefreshToken,
  generateResetToken,
  verifyResetToken,
} from "../utils/auth";
import prisma from "../prisma/client";

export const registerService = async (data: {
  email: string;
  password: string;
  name?: string;
  role?: "USER" | "ADMIN";
}) => {
  const existing = await findUserByEmailRepo(data.email);
  if (existing) throw new Error("Email already exists");

  const hashed = await hashPassword(data.password);

  const user = await createUserRepo({
    email: data.email,
    password: hashed,
    name: data.name,
  });

  return { id: user.id, email: user.email, name: user.name, role: user.role };
};

export const loginService = async (email: string, password: string) => {
  const user = await findUserByEmailRepo(email);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  const refreshToken = generateRefreshToken(user.id);

  return {
    accessToken: token,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  };
};

export const refreshTokenService = async (refreshToken: string) => {
  const decoded = verifyRefreshToken(refreshToken);

  const user = await prisma.user.findUnique({ where: { id: decoded.id } });
  if (!user) throw new Error("User not found");

  const newAccessToken = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return { accessToken: newAccessToken };
};

export const requestPasswordResetService = async (email: string) => {
  const user = await findUserByEmailRepo(email);
  if (!user) throw new Error("User not found");

  const resetToken = generateResetToken(user.id);
  const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

  await prisma.user.update({
    where: { id: user.id },
    data: {
      resetToken,
      resetTokenExpiry: expiry,
    },
  });

  // In real app, send email with reset link
  console.log(`Password reset token for ${email}: ${resetToken}`);

  return { message: "Password reset link has been sent to your email" };
};

export const resetPasswordService = async (
  resetToken: string,
  newPassword: string,
) => {
  const decoded = verifyResetToken(resetToken);
  const user = await findUserByResetTokenRepo(resetToken);

  if (!user) throw new Error("Invalid or expired reset token");

  const hashedPassword = await hashPassword(newPassword);

  await updatePasswordRepo(user.id, hashedPassword);

  return { message: "Password has been reset successfully" };
};
