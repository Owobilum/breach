import z from "zod";

export const AuthSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" }),
});
