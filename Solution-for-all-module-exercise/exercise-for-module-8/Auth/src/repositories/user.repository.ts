import prisma from '../prisma/client';

export const createUserRepo = async (data: { email: string; password: string; name?: string; role?: string }) => {
  return prisma.user.create({ data });
};

export const findUserByEmailRepo = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};