import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const requestMethod = req.method;
  const requestUrl = req.url;
  const timestamp = new Date().toISOString();
  console.log("requestMethod:", requestMethod);
  console.log("requestUrl:", requestUrl);
  console.log("timestamp:", timestamp);
  next();
};
