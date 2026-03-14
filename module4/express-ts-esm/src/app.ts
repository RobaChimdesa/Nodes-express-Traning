import express from "express";
import userRoutes from "./routes/user.routes.js";
import  { logger } from "./middleware/logger.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(logger); // Apply the logger middleware to all routes

// Routes
app.use("/users", userRoutes);
// app.use("/users", logger, userRoutes);  // Example of applying logger middleware to specific route





// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
