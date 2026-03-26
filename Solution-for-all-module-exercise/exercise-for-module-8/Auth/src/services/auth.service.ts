import { hashPassword, comparePassword, generateToken } from "../utils/auth";
import {
  createUserRepo,
  findUserByEmailRepo,
} from "../repositories/user.repository";

import { generateRefreshToken, verifyRefreshToken } from "../utils/auth";
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
  if (!user) throw new Error('User not found');

  const newAccessToken = generateToken({ 
    id: user.id, 
    email: user.email, 
    role: user.role 
  });

  return { accessToken: newAccessToken };
};