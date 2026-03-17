
 import { Request, Response, NextFunction } from 'express';
 import { ZodSchema } from 'zod';
 
 export const validate = (schema: ZodSchema) => 
 { 
    
    return (req: Request, res: Response, next: NextFunction) => 
        { 
        
        //parse and validate    
        const result = schema.safeParse(req.body);

        if (!result.success) 
        {
            return res.status(400).json({ error: 'Validation failed', details: result.error }); 

        }
        // Pass to next layer
        next(); 
      }; 
};
