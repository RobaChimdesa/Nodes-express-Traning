import { Request, Response, NextFunction } from "express";

export const requestLogger = (req: Request, res: Response, next: NextFunction) =>  {
  const method = req.method;           // GET, POST, PUT, etc.
  const url = req.url;                 // the path, e.g. /users or /health
  const time = new Date().toISOString(); // nice readable timestamp

  console.log(`[${time}] ${method} ${url}`);

  next(); // very important — let the request continue
};