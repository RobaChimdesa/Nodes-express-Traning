import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// Simple reusable validator
export const validate = (schema: any, part: 'body' | 'params' = 'body') => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate the chosen part (body or params)
      const result = schema.parse(req[part]);

      // Put clean data back (TypeScript will know the shape!)
      req[part] = result;

      next(); // OK → go to controller
    } catch (error: any) {
      // Send nice error to client
      res.status(400).json({
        status: 'error',
        message: 'Invalid input',
        errors: error.errors || [error.message],
      });
    }
  };
};