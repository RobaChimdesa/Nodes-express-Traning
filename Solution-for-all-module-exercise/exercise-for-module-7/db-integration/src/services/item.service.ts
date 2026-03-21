// src/services/item.service.ts
import {
  getItemsRepo,
  getItemByIdRepo,
  createItemRepo,
  updateItemRepo,
  deleteItemRepo,
} from '../repositories/item.repository';

export const getItemsService = async () => {
  const data = await getItemsRepo();
  return {
    data,
    status: "success",
    message: "Items retrieved successfully",
    statusCode: 200,
    error: null,
  };
};

export const getItemByIdService = async (id: number) => {
  const data = await getItemByIdRepo(id);
  if (!data) throw new Error("Item not found");
  return {
    data,
    status: "success",
    message: "Item retrieved successfully",
    statusCode: 200,
    error: null,
  };
};

export const createItemService = async (item: any) => {
  const data = await createItemRepo(item);
  return {
    data,
    status: "success",
    message: "Item created successfully",
    statusCode: 201,
    error: null,
  };
};

export const updateItemService = async (id: number, item: any) => {
  const data = await updateItemRepo(id, item);
  return {
    data,
    status: "success",
    message: "Item updated successfully",
    statusCode: 200,
    error: null,
  };
};

export const deleteItemService = async (id: number) => {
  await deleteItemRepo(id);
  return {
    data: null,
    status: "success",
    message: "Item deleted successfully",
    statusCode: 204,
    error: null,
  };
};