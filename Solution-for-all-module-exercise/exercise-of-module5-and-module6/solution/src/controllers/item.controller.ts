import { Request, Response } from "express";

import {
  getItemsService,
  getItemByIdService,
  createItemService,
  updateItemService,
  deleteItemService,
} from "../services/item.service";

export const getItems = (req: Request, res: Response) => {
  // Extract query parameters (with safe defaults)
  const page   = Number(req.query.page)   || 1;
  const limit  = Number(req.query.limit)  || 10;
  const name   = req.query.name   as string | undefined;   // partial search
  const inStore = req.query.inStore === "true" ? true : req.query.inStore === "false" ? false : undefined;

  // Optional: sorting
  const sort = req.query.sort as string | undefined;

  const response = getItemsService({
    page,
    limit,
    nameFilter: name,
    inStoreFilter: inStore,
    sort,
  });

  res.json(response);
};

export const getItemById = (req: Request, res: Response) => {
  const { id } = req.params;
  const response = getItemByIdService(id);
  if (!response) {
    return res.status(404).json({ status: "error", message: "Item not found" });
  }
  res.json({
    status: "success",
    message: "Item retrieved",
    data: response
  });

  // res.json(response);
};

export const createItem = (req: Request, res: Response) => {
  const item = req.body;

  const response = createItemService(item);
  res.status(201).json({
    status: "success",
    message: "Item created!",
    data: response
  });

  // res.status(201).json(response);
};

export const updateItem = (req: Request, res: Response) => {
  const item = req.body;
  const { id } = req.params;
  const response = updateItemService(id, item);

  res.status(200).json(response);
};

export const deleteItem = (req: Request, res: Response) => {
  const { id } = req.params;

  const response = deleteItemService(id);

  res.status(204).json(response);
};
