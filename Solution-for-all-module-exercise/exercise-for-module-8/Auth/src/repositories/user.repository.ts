// import prisma from "../prisma/client";

// export const createUserRepo = async (data: {
//   email: string;
//   password: string;
//   name?: string;
//   role?: string;
// }) => {
//   return prisma.user.create({ data });

// export const findUserByEmailRepo = async (email: string) => {
//   return prisma.user.findUnique({ where: { email } });
// };

// };

// src/repositories/user.repository.ts
import prisma from '../prisma/client';
import { Role } from '@prisma/client';

export const createUserRepo = async (data: {
  email: string;
  password: string;
  name?: string;
  role?: Role;}) => {
  return prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      name: data.name,
      role: data.role ?? 'USER',       // Default role if not provided
    },
  });
};

export const findUserByEmailRepo = async (email: string) => {
  if (!email) throw new Error("Email is required");

  return prisma.user.findUnique({
    where: { email },
  });
};
