 import { Request, Response, NextFunction } from 'express';
 
 export const errorHandler = (error: any, req:Request, res:Response, next:NextFunction) => {
  if (error?.code === "P2002") return res.status(409).json({ message: "Email already exists" });
  if (error?.code === "P2025") return res.status(404).json({ message: "Record not found" });

  console.error(error);
  return res.status(500).json({ message: "Internal server error" });
}