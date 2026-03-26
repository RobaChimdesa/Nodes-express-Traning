import { z } from 'zod';
// For creating new item (POST)
export const createItemSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    isInStore: z.boolean(),
    amountInStore: z.number().int().min(0, "Amount must be 0 or more"),
    // description is optional
    description: z.string().max(200).optional(),
});
// For updating item (PUT) → everything optional
export const updateItemSchema = createItemSchema.partial();
// For ID in URL (:id)
export const idSchema = z.object({
    id: z.coerce.number().int().positive("ID must be a positive number"),
});
