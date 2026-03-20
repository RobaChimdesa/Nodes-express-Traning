//Rest Principle Comes
import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";

import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controller";

const router = Router();

router.get("/", authMiddleware, getItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/", updateItem);
router.delete("/:id", deleteItem);

export default router;
