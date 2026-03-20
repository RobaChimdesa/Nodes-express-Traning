import swaggerJSDoc from "swagger-jsdoc";

const swaggerJSDocOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Items API (JSDoc)",
      version: "1.0.0",
      description: "API documentation generated from route JSDoc comments.",
    },
    servers: [
      {
       
        url: "http://localhost:3000",

      },
    ],
  },
  apis: ["./src/routes/*.ts"], // where your route files are
};

const swaggerSpec = swaggerJSDoc(swaggerJSDocOptions);
export default swaggerSpec;
