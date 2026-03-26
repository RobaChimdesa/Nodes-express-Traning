// src/repositories/item.repository.ts
import prisma from '../prisma/client';
export const getItemsRepo = async () => {
    return prisma.item.findMany({
        where: { isDeleted: false },
        orderBy: { createdAt: 'desc' },
    });
};
export const getItemByIdRepo = async (id) => {
    return prisma.item.findFirst({
        where: { id, isDeleted: false },
    });
};
export const createItemRepo = async (data) => {
    return prisma.item.create({
        data: {
            name: data.name,
            description: data.description,
            isInStore: data.isInStore ?? true,
            amountInStore: data.amountInStore ?? 0,
        },
    });
};
export const updateItemRepo = async (id, data) => {
    return prisma.item.update({
        where: { id },
        data,
    });
};
export const deleteItemRepo = async (id) => {
    return prisma.item.update({
        where: { id },
        data: { isDeleted: true },
    });
};
