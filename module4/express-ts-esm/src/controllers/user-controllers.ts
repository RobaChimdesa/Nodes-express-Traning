import { Request, Response } from "express";

import { STATUS_CODES } from "node:http";

import { getUsersService, createUserService } from "../services/user-services.js";

export const getUsers = (req: Request, res: Response) => {
  const response = getUsersService();
  res.json(response);
};

export const createUser = (req: Request, res: Response) => {
  const user = req.body;
  const response = createUserService(user);
};

export const getUsersById = (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("Getting user with ID:", id);
  res.json({ id, name: "John Doe" });

  const response = {
    data: id,
    status: 200,
    message: "Success",
    STATUS_CODES: STATUS_CODES[200],
    error: [],
  };
};
