import { z } from "zod";
export const UserSchema = z.object({
    name: z
        .string()
        .min(3)
        .transform((val) => val.toUpperCase()),
    age: z.number().min(18),
    email: z.string().email(),
    password: z.string().min(8),
    phoneNumber: z.string().optional(), //adding optional field
    role: z.string().default("guest"), // adding a field with default value -> it means it is optional
    address: z.object({
        city: z.string(),
        country: z
            .string()
            .refine((val) => val.startsWith("ETH"), { message: "must be ethiopia" }),
    }),
    intereset: z.array(z.object({ name: z.string(), category: z.string() })), // array
});
