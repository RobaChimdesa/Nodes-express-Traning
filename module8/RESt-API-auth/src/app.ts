import express from "express";

import itemRoutes from "./routes/item.route"
import authRoutes from './routes/auth-route'
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/items", itemRoutes);
app.use("/auth",authRoutes );

// Start server
app.listen(PORT, () => {
    
  console.log(`Server running at http://localhost:${PORT}`);
});