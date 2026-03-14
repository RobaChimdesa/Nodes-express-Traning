import { Router } from "express";
import { getUsers, createUser, getUsersById } from "../controllers/user-controllers.js";
const router = Router();
router.get("/", getUsers);
router.get("/:id", getUsersById); // Example of route with request params
router.post("/", createUser);
export default router;
