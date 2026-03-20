import express from "express";
import { UserSchema } from "./schema/user-schema";
const app = express();
const PORT = 3000;
// Middleware to parse JSON
app.use(express.json());
// Routes
app.post("/zod-test", (req, res) => {
    const user = req.body;
    const result = UserSchema.parse(user);
    console.log("The Result is");
    console.log(result);
    res.send(result);
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
