// src/controllers/item.controller.ts
import { Request, Response } from 'express';
import {
  getItemsService,
  getItemByIdService,
  createItemService,
  updateItemService,
  deleteItemService,
} from '../services/item.service';

export const getItems = async (_req: Request, res: Response) => {
  try {
    const response = await getItemsService();
    res.json(response);
  } catch (err: any) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const response = await getItemByIdService(id);
    res.json(response);
  } catch (err: any) {
    const status = err.message.includes('not found') ? 404 : 500;
    res.status(status).json({ status: 'error', message: err.message });
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const response = await createItemService(req.body);
    res.status(201).json(response);
  } catch (err: any) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const response = await updateItemService(id, req.body);
    res.json(response);
  } catch (err: any) {
    const status = err.message.includes('not found') ? 404 : 400;
    res.status(status).json({ status: 'error', message: err.message });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const response = await deleteItemService(id);
    res.status(204).json(response);
  } catch (err: any) {
    const status = err.message.includes('not found') ? 404 : 500;
    res.status(status).json({ status: 'error', message: err.message });
  }
};