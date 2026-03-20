import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDocSpec from "./config/swagger-jsdoc";
import swaggerDocument from "./config/swagger-yaml";

import itemRoutes from "./routes/item.route";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/items", itemRoutes);
app.use(
  "/api-docs/yaml",
  swaggerUi.serveFiles(swaggerDocument),
  swaggerUi.setup(swaggerDocument)
);
app.use(
  "/app-docs",
  swaggerUi.serveFiles(swaggerJSDocSpec),
  swaggerUi.setup(swaggerJSDocSpec),
);



// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Server running at http://localhost:${PORT}/app-docs`);
  console.log(`Server running at http://localhost:${PORT}/api-docs/yaml`);
  
});
