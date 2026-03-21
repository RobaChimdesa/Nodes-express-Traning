//Rest Principle Comes

import { Router } from "express";

import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controller";
import { validate } from "../middleware/validate";
import { createItemSchema, updateItemSchema, idSchema } from "../schemas/item.schema";

const router = Router();

// router.get("/", getItems);
// router.get("/:id", getItemById);
// router.post("/", createItem);
// router.put("/", updateItem);
// router.delete("/:id", deleteItem);
// GET all → no validation needed for now (or add query later)
router.get("/", getItems);

// GET one → validate :id
router.get("/:id", validate(idSchema, 'params'), getItemById);

// POST create → validate body
router.post("/", validate(createItemSchema, 'body'), createItem);

// PUT update → validate id + body
router.put("/:id", 
  validate(idSchema, 'params'), 
  validate(updateItemSchema, 'body'), 
  updateItem
);

// DELETE → validate id only
router.delete("/:id", validate(idSchema, 'params'), deleteItem);

export default router;

