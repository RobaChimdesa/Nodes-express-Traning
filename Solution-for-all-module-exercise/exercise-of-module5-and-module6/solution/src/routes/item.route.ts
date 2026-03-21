//Rest Principle Comes
import { Router } from "express";

import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controller";

import { validate } from "../middleware/middleware";
import { createItemSchema, updateItemSchema, idSchema } from "../schemas/item-schema";

const router = Router();

router.get("/", getItems);
router.get("/:id", validate(idSchema, 'params'), getItemById);
router.post("/", validate(createItemSchema, 'body'), createItem);
router.put("/:id", validate(idSchema, 'params'), 
                        validate(updateItemSchema, 'body'), updateItem);
router.delete("/:id", validate(idSchema, 'params'), deleteItem);

export default  router;
