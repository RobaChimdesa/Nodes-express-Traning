//Rest Principle Comes 
import { Router } from "express";
import { getItems, getItemById, createItem, updateItem, deleteItem } from "../controllers/item.controller";
const router = Router();
router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/", updateItem);
router.delete("/:id", deleteItem);
export default router;
