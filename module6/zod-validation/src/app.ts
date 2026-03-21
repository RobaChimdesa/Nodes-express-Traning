
import express from "express";

import { UserSchema } from "./schema/user-schema";
import { validate } from "./middleware/validate-middleware";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.post("/zod-test", (req, res) => 
{

   const user = req.body;

   const result = UserSchema.parse(user);

   console.log("The Result is");
   console.log(result);

   res.send(result);

});

app.post("/zod-test-safe", (req, res) => 
{

   const user = req.body;

   const { success, error, data } = UserSchema.safeParse(user);

   console.log("The Result is");
   console.log(success, error, data );

   //Formatted Response 
   const response =  
   {
      status : success || false,
      data : data || null,
      error : error || null
   }

   if(success)
   {
   res.send(response);
   }
   else 
   {
   res.status(400).send(response);
   }

});

app.post("/zod-test-safe", (req, res) => 
{

   const user = req.body;

   const { success, error, data } = UserSchema.safeParse(user);

   console.log("The Result is");
   console.log(success, error, data );

   //Formatted Response 
   const response =  
   {
      status : success || false,
      data : data || null,
      error : error || null
   }

   if(success)
   {
   res.send(response);
   }
   else 
   {
      res.status(400).send(response);
   }

});

app.post("/zod-test-safe-middleware", validate(UserSchema),  (req, res) => 
{
   const user = req.body;
   res.send(user);

});

// Start server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
