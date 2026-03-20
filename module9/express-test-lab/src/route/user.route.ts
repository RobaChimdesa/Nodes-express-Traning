import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, name: "John" }]);
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name required" });
  }

  res.status(201).json({ id: 2, name });
});

export default router;
