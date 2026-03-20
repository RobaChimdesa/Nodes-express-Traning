
import express from "express";

import { UserSchema } from "./schema/user-schema";
import { validate } from "./middleware/validate-middleware";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
