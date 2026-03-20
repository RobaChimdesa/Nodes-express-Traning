//Rest Principle Comes

import { Router } from "express";

import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controller";

/**
 * @openapi
 * /items:
 *   get:
 *     summary: Get all items
 *     description: Returns a list of all items
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               - id: "101"
 *                 name: "Laptop"
 *                 isInStore: true
 *                 amountInStore: 7
 *               - id: "102"
 *                 name: "Mouse"
 *                 isInStore: true
 *                 amountInStore: 30
 */



const router = Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/", updateItem);
router.delete("/:id", deleteItem);

export default router;
