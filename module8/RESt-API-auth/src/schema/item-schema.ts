import { z } from "zod"

export const CreateItemSchema = z.object(
{
   name : z.string().min(3),
   isInStore : z.boolean().default(false) ,
   amountInStore: z.number().min(1).default(1),
});

export const UpdateItemSchema = z.object(
{
   name : z.string().min(3).optional(),
   isInStore : z.boolean().optional() ,
   amountInStore: z.number().min(1).optional(),
});